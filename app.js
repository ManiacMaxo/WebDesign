const createError = require('http-errors')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const store = new FileStore()

const app = express()
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const indexRoutes = require('./routes/index')
const formRoutes = require('./routes/form')
const adminRoutes = require('./routes/admin')
const newsRoutes = require('./routes/news')
const divisionsRoutes = require('./routes/divisions')

app.use(logger('combined', { stream: accessLogStream }))
app.use(logger('dev'))
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: store,
    })
)

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoutes)
app.use(formRoutes)
app.use('/admin', adminRoutes)
app.use('/news', newsRoutes)
app.use('/divisions', divisionsRoutes)

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
