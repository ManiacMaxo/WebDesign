const Application = require('../models/application')
const User = require('../models/member')
const bcrypt = require('bcrypt')

exports.getJoin = (req, res, next) => {
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
}

exports.postJoin = (req, res, next) => {
    const { name, email, twitter, youtube, game, age } = req.body
    Application(name, email, twitter, youtube, game, age)
        .save()
        .then(() => {
            res.redirect('/')
        })
}

exports.getRegister = (req, res, next) => {
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
}

exports.postRegister = (req, res, next) => {
    const { email, password } = req.body
}

exports.getLogin = (req, res, next) => {
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
    ]

    res.render('form', {
        action: 'login',
        title: 'login',
        fields: fields,
        isAuthenticated: false,
    })
}

exports.postLogin = (req, res, next) => {
    User.getByEmail(req.body.email)
        .then((user) => {
            if (user.password !== req.body.password) {
                throw 'Email or password incorrect'
            }
            req.session.isLoggedIn = true
            req.session.user = user
            req.session.save((err) => {
                console.log(err)
                res.redirect('/')
            })
        })
        .catch((err) => console.log(err))
}

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err)
        res.redirect('/')
    })
}
