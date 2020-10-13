const { Client } = require('pg')
const { config } = require('../secret')

client = new Client(config)

module.exports = client
