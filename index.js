#!/usr/bin/env node

const debug = require('debug')('temp:server')
const http = require('http')
const db = require('./src/util/db')
const app = require('./src/app')

const port = 3000
app.set('port', port)

const server = http.createServer(app)

db.connect().then(() => {
    console.log('connected')
    server.listen(port)
})

server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error
    }

    let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
})

server.on('listening', () => {
    let addr = server.address()
    let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
    debug('Listening on ' + bind)
})
