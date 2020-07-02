const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const indexRouter = require('./routers/index')
const newsRouter = require('./routers/news')
const formRouter = require('./routers/form')
const divisionsRouter = require('./routers/divisions')
const createRouter = require('./routers/create')
const testingRouter = require('./routers/testing')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, '../access.log'),
    { flags: 'a' }
)
app.use(logger('combined', { stream: accessLogStream }))
app.use(logger('dev'))

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/', formRouter)
app.use('/news', newsRouter)
app.use('/create', createRouter)
app.use('/divisions', divisionsRouter)
app.use('/test', testingRouter)

const store = new FileStore()
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: store,
    })
)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
