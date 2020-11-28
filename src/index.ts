import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Applications } from './entity'
import debug from 'debug'
import http from 'http'
import { app } from './app'

const port = process.env.port || 3000
app.set('port', port)

const server = http.createServer(app)

createConnection()
    .then(async (connection) => {
        // const application = new Applications()
        // application.name = 'Maxim Ivanov'
        // application.email = 'max@gmail.com'
        // application.twitter = 'max'
        // application.youtube = 'max'
        // application.game = 'Rainbow 6: Siege'
        // application.age = 17
        // await application.save()
        // console.log('Saved a new application with id: ' + application.id)
        // console.log('Loading applications from the database...')
        // const applications = await Applications.find()
        // console.log('Loaded applications: ', applications)
        console.log('connected')
        server.listen(port)
    })
    .catch((error) => console.log(error))

// server.on('error', (error) => {
//     if (error.syscall !== 'listen') {
//         throw error
//     }

//     let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

//     // handle specific listen errors with friendly messages
//     switch (error.code) {
//         case 'EACCES':
//             console.error(bind + ' requires elevated privileges')
//             process.exit(1)
//             break
//         case 'EADDRINUSE':
//             console.error(bind + ' is already in use')
//             process.exit(1)
//             break
//         default:
//             throw error
//     }
// })

server.on('listening', () => {
    const addr = server.address()
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
    debug(`Listening on ${bind}`)
})
