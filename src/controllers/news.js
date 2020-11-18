const Article = require('../models/article')

exports.getAllNews = (req, res, next) => {
    Article.getNews().then((articles) => {
        res.render('news', { news: articles.rows })
    })
}

exports.getNews = (req, res, next) => {
    Article.getById(req.params.id).then((articles) => {
        res.render('article', {
            content: articles.rows[0],
        })
    })
}
