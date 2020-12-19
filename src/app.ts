import express from 'express'
import { Request, Response } from 'express'
import createHttpError from 'http-errors'
import logger from 'morgan'
import bodyParser from 'body-parser'

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// import { createWriteStream } from 'fs'
// const accessLogStream = createWriteStream(__dirname + '/../logs/access.log', {
//     flags: 'a'
// })
// app.use(logger('combined', { stream: accessLogStream }))
app.use(logger('dev'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../public'))

import * as routes from './routes'

app.use(routes.root)
app.use(routes.form)
app.use(routes.auth)
app.use('/create', routes.create)
app.use('/admin', routes.admin)
app.use('/news', routes.news)
app.use('/team', routes.teams)

app.use((req: Request, res: Response, next) => {
    next(createHttpError(404))
})

app.use((err, req: Request, res: Response, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
})

export default app
