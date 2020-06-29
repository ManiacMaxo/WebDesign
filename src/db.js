const mysql = require('mysql')
const { config } = require('../secret')

const db = mysql.createConnection(config)

module.exports = db
