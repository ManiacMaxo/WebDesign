const mysql = require('mysql')
const util = require('util')
const { config } = require('../secret')

const db = mysql.createConnection(config)
db.query = util.promisify(db.query).bind(db)

module.exports = db
