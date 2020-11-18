const Article = require('../models/article')

exports.getIndex = (req, res, next) => {
    res.render('index', { title: 'Hello World' })
}

exports.getAbout = (req, res, next) => {
    // Article.getByName('About Bagun Esports').then((rows) => {
    Article.getById(1).then((article) => {
        res.render('article', {
            content: article.rows[0],
        })
    })
}

exports.getTOS = (req, res, next) => {
    // Article.getByName('Terms of Service').then((rows) => {
    Article.getById(2).then((article) => {
        res.render('article', {
            content: article.rows[0],
        })
    })
}

exports.getShop = (req, res, next) => {
    res.render('test')
}
