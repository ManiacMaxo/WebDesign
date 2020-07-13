const vhost = require('vhost')
const express = require('express')
const db = require('./util/db')

const server = express()

server.use(vhost('bagun.local', require('./app')))
server.use(vhost('bagun.gorchilov.net', require('./app')))
server.use(vhost('gorchilov.net', require('./app')))

db.connect().then(() => {
    console.log('connected')
    server.listen(80)
})
