const express = require('express')
const router = express.Router()
const Application = require('../../src/models/application')
const { route } = require('./create')

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
            type: 'email',
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

    res.render('form', { action: 'join', title: 'join bagun', fields: fields })
})

router.post('/join', (req, res, next) => {
    const { name, email, twitter, youtube, game, age } = req.body
    Application(name, email, twitter, youtube, game, age)
        .save()
        .then(() => {
            res.redirect('/')
        })
})

router.get('/register', (req, res, next) => {
    fields = [
        {
            name: 'email',
            required: true,
            type: 'email',
        },
        {
            name: 'password',
            required: true,
            type: 'password',
        },
        {
            name: 'confirm password',
            required: true,
            type: 'password',
        },
    ]
    res.render('form', {
        action: 'register',
        title: 'register',
        fields: fields,
    })
})

router.post('/register', (req, res, next) => {
    const { email, password } = req.body
})

module.exports = router
