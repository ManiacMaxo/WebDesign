#!/usr/bin/env node

const debug = require('debug')('src:server')
const http = require('http')
const app = require('./app')

let port = '3000'
app.set('port', port)

let server = http.createServer(app)

// start the server

server.listen(port)

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
