import 'reflect-metadata'
import { createConnection } from 'typeorm'
import debug from 'debug'
import { app } from './app'

const port = process.env.port || 3000
app.set('port', port)

import http from 'http'
const server = http.createServer(app)

createConnection()
    .then((connection) => {
        server.listen(port)
        console.log(`connected to port ${port}`)
    })
    .catch((error) => console.log(error))

server.on('error', (error: any) => {
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
    const addr = server.address()
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
    debug(`Listening on ${bind}`)
})
