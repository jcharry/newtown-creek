var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

// Get development environment and current working directory
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PWD = process.cwd();

// In production (i.e. on heroku), we won't use an ENV file
// instead we use a heroku environment variable with the same vars

// Returns a concatenated list of plugins depending on
// whether environment is development or production

module.exports = configure();
