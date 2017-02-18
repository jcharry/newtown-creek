var express = require('express');
var app = express();
var path = require('path');

// Heroku passes a port # as an environment var
const PORT = process.env.PORT || 8080;
// Heroku doesn't like __dirname, so we set the current
// working directory to an ENV variable to reference
// a static directory containing data files
process.env.PWD = process.cwd();

app.use(express.static('dist'));
//app.use(express.static(process.env.PWD + '/static'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(process.env.PWD, 'dist', 'index.html'));
});

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});
