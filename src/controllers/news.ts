import { Article, User } from '../entity'
import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import showdown from 'showdown'

export const getAll = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Article)
        .find()
        .then((articles) => {
            try {
                return res.render('news', { articles })
            } catch (e) {
                console.log(e)
                return res.redirect('/')
            }
        })
}

export const getOne = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Article)
        .findOne(req.params.id)
        .then((article) => {
            return res.render('article', { article })
        })
}

export const getCreateArticle = (req: Request, res: Response, next) => {
    res.render('create-article')
}

export const postCreateArticle = (req: Request, res: Response, next) => {
    const converter = new showdown.Converter()
    const article = new Article()

    article.title = req.body.title
    article.body = converter.makeHtml(req.body.content)
    getConnection()
        .getRepository(User)
        .findOne(1)
        .then((user) => {
            article.author = user
        })
    article.thumbnail = `/uploads/images/${article.id}`

    try {
        getConnection().getRepository(Article).save(article)
    } catch (e) {
        console.log(e)
    }
    res.redirect('/')
}
