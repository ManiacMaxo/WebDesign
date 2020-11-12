#!/usr/bin/env node

const vhost = require('vhost')
const express = require('express')
const db = require('./src/util/db')
const app = require('./src/app')

const server = express()

server.use(vhost('bagun.local', app))
server.use(vhost('bagun.gorchilov.net', app))
server.use(vhost('gorchilov.net', app))

db.connect().then(() => {
    console.log('connected')
    server.listen(3000)
})
