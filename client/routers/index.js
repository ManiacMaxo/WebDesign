const express = require('express')
const router = express.Router()
const Article = require('../../src/models/article')

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Hello World' })
})

router.get('/about', (req, res, next) => {
    Article.getByName('About Bagun Esports').then((rows) => {
        res.render('article', {
            content: rows[0],
        })
    })
})

router.get('/tos', (req, res, next) => {
    Article.getByName('Terms of Service').then((rows) => {
        res.render('article', {
            content: rows[0],
        })
    })
})

router.get('/shop', (req, res, next) => {
    res.render('test')
})

module.exports = router
