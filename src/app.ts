import express from 'express'
import { Request, Response } from 'express'
import createHttpError from 'http-errors'
import logger from 'morgan'
import fs from 'fs'

const app = express()
const accessLogStream = fs.createWriteStream('logs/access.log', { flags: 'a' })

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(logger('combined', { stream: accessLogStream }))
app.use(logger('dev'))

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

import * as routes from './routes'

app.use('/static', express.static('public'))
app.use(routes.root)
app.use(routes.form)
// app.use('/admin', routes.admin)
app.use('/news', routes.news)
app.use('/divisions', routes.divisions)

app.use((req: Request, res: Response, next) => {
    next(createHttpError(404))
})

app.use((err, req: Request, res: Response, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
})

export { app }
