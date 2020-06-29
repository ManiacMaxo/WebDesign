const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')

const indexRouter = require('./routers/index')
const newsRouter = require('./routers/news')
const formRouter = require('./routers/form')
const testingRouter = require('./routers/testing')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/', formRouter)
app.use('/news', newsRouter)
app.use('/test', testingRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
