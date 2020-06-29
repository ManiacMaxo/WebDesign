const express = require('express')
const router = express.Router()
const Application = require('../../src/models/application')

router.get('/join', (req, res, next) => {
    fields = [
        {
            name: 'name',
            required: true,
            type: 'text',
        },
        {
            name: 'email',
            required: true,
            type: 'text',
        },
        {
            name: 'twitter',
            required: false,
            type: 'text',
        },
        {
            name: 'youtube',
            required: true,
            type: 'text',
        },
        {
            name: 'game',
            required: true,
            type: 'text',
        },
        {
            name: 'age',
            required: true,
            type: 'number',
        },
    ]

    res.render('form', { title: 'submit', fields: fields })
})

router.post('/join', (req, res, next) => {
    const { name, email, twitter, youtube, game, age } = req.body
    Application(name, email, twitter, youtube, game, age)
        .save()
        .then(() => {
            res.redirect('/')
        })
})

module.exports = router
