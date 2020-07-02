const Article = require('../models/article')

exports.getAllNews = (req, res, next) => {
    Article.getNews().then((rows) => {
        res.render('news', { news: rows })
    })
}

exports.getNews = (req, res, next) => {
    Article.getById(req.params.id).then((rows) => {
        res.render('article', {
            content: rows[0],
        })
    })
}
