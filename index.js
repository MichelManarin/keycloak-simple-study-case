const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const keycloak = require('./configs/keycloak-config.js')
  .initKeycloak(app)
app.use(keycloak.middleware())

app.use(bodyParser.json())

app.use(cors())

app.get('/', (req, res) => res.send('Server is up!'))

const testController = require('./controllers/test-controller.js')
app.use('/test', testController)

const server = http.createServer(app)
const port = process.env.NODE_PORT || 3000

server.listen(port, () => console.log('Servidor rodando na porta %s.', port))