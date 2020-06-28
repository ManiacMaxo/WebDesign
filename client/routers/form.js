const express = require('express')
const router = express.Router()

router.get('/join', (req, res, next) => {
    res.render('form')
})

module.exports = router
