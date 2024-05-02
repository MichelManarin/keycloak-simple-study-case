const session = require('express-session')
const Keycloak = require('keycloak-connect')
let _keycloak
const keycloakConfig = {
  clientId: 'backend-teste',
  bearerOnly: true,
  serverUrl: 'http://localhost:3030/auth',
  realm: 'TenantTeste',
  credentials: {
    secret: '9cd81fd3-e077-4018-8adb-a2288ff5ebc9'
  }
}
function initKeycloak(app) {
  if (_keycloak) {
    console.warn("Trying to init Keycloak again!")
    return _keycloak
  }
  else {
    console.log('Initializing Keycloak...')
    const memoryStore = new session.MemoryStore()
    app.use(session({
      secret: keycloakConfig.credentials.secret,
      resave: false,
      saveUninitialized: true,
      store: memoryStore
    }))
    _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig)
    console.log("Keycloak Initialized.")
    return _keycloak
  }
}
function getKeycloak() {
  if (!_keycloak) {
    console.error('Keycloak has not been initialized. Please called init first.')
  }
  return _keycloak
}
module.exports = {
  initKeycloak,
  getKeycloak
}