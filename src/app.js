const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const fs = require('fs')

const app = express()
const accessLogStream = fs.createWriteStream('logs/access.log', { flags: 'a' })

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(logger('combined', { stream: accessLogStream }))
app.use(logger('dev'))

app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../public'))

const indexRoutes = require('./routes/index')
const formRoutes = require('./routes/form')
const adminRoutes = require('./routes/admin')
const newsRoutes = require('./routes/news')
const divisionsRoutes = require('./routes/divisions')

app.use(indexRoutes)
app.use(formRoutes)
app.use('/admin', adminRoutes)
app.use('/news', newsRoutes)
app.use('/divisions', divisionsRoutes)

app.use((req, res, next) => {
    next(createError(404))
})

app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
