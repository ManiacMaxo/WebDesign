import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { Request, Response } from 'express'
import createHttpError from 'http-errors'
import logger from 'morgan'

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

import { createWriteStream } from 'fs'
const accessLogStream = createWriteStream(__dirname + '/../logs/access.log', {
    flags: 'a'
})
app.use(logger('combined', { stream: accessLogStream }))
app.use(logger('dev'))

// authentication middlewares
import passport from 'passport'
import flash from 'express-flash'
import session from 'express-session'

app.use(flash())
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../public'))

import * as routes from './routes'
import { checkAdmin, checkAuth } from './controllers/root'

// app.use((req, res, next) => {
//     console.log(req.user)
//     next()
// })

app.use(routes.root)
app.use(routes.form)
app.use(routes.auth)
app.use('/admin', checkAuth, checkAdmin, routes.admin)
app.use('/create', checkAuth, routes.create)
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
