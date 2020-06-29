const express = require('express')
const router = express.Router()
const Article = require('../../src/models/article')

router.get('/', (req, res, next) => {
    res.render('index', { title: 'Hello World' })
})

router.get('/about', (req, res, next) => {
    Article.getByName('About Bagun Esports').then((rows) => {
        console.log(rows)
        res.render('article', {
            content: rows[0],
        })
    })
})

module.exports = router
