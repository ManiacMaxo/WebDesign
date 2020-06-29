const express = require('express')
const router = express.Router()
const Article = require('../../src/models/article')

router.get('/', (req, res, next) => {
    Article.getNews().then((rows) => {
        res.render('news', { news: rows })
    })
})


router.get('/:id', (req, res, next) => {
    Article.getById(req.params.id).then((rows) => {
        console.log(rows)
        res.render('article', {
            content: rows[0],
        })
    })
})

module.exports = router
