const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const jsonParser = bodyParser.json();

// Heroku passes a port # as an environment var
const PORT = process.env.PORT || 8080;
// Heroku doesn't like __dirname, so we set the current
// working directory to an ENV variable to reference
// a static directory containing data files
process.env.PWD = process.cwd();

app.use(express.static('dist'));
//app.use(express.static(process.env.PWD + '/static'));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     console.log('middleware fired');
//     next();
// });

app.get('*', (request, response) => {
    response.sendFile(path.resolve(process.env.PWD, 'dist', 'index.html'));
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    //eslint-disable-line
    return re.test(email);
}

app.post('/api/signup', jsonParser, (req, res) => {
    const email = req.body.email;
    if (validateEmail(email)) {
        res.status(200).send('success');
    } else {
        res.status(500).send('something went wrong');
    }
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
