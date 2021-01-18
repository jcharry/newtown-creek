const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

// Heroku passes a port # as an environment var
const PORT = process.env.PORT || 8080
// Heroku doesn't like __dirname, so we set the current
// working directory to an ENV variable to reference
// a static directory containing data files
process.env.PWD = process.cwd()

app.use(express.static('build'))
app.use(express.static('public'))
//app.use(express.static(process.env.PWD + '/static'));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(process.env.PWD, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
