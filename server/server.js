const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const emailSchema = require('./emailSchema.js');

const app = express();

const jsonParser = bodyParser.json();

// Heroku passes a port # as an environment var
const PORT = process.env.PORT || 8080;
// Heroku doesn't like __dirname, so we set the current
// working directory to an ENV variable to reference
// a static directory containing data files
process.env.PWD = process.cwd();

let MONGO_DB_URI = '';
// In production, use environment var to store mlab uri
if (process.env.PROD_MONGODB) {
    MONGO_DB_URI = process.env.PROD_MONGODB;
} else {
    // Locally store creds for development
    let creds  = require('../creds/creds.json');  // eslint-disable-line
    MONGO_DB_URI = creds.MONGO_DB_URI;
}
mongoose.connect(MONGO_DB_URI);
const db = mongoose.connection;
const Email = mongoose.model('Email', emailSchema);

db.on('open', () => {
    console.log('connection opened');
});

function saveEmail(e, cb) {
    const email = new Email({
        email: e
    });
    email.save(err => {
        if (err) {
            cb(err);
        } else {
            cb('saved');
        }
    });
}

app.use(express.static('dist'));
//app.use(express.static(process.env.PWD + '/static'));

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    //eslint-disable-line
    return re.test(email);
}

app.get('*', (request, response) => {
    response.sendFile(path.resolve(process.env.PWD, 'dist', 'index.html'));
});

app.post('/api/signup', jsonParser, (req, res) => {
    const email = req.body.email;
    if (validateEmail(email)) {
        // TODO: Save email!
        saveEmail(email, msg => {
            console.log(msg);
            res.status(200).send(msg);
        });
    } else {
        res.status(500).send('something went wrong');
    }
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
