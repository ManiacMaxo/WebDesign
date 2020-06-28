const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('news')
})

router.get('/:id', (req, res, next) => {
    res.render('article', { title: req.params.id })
})

module.exports = router
