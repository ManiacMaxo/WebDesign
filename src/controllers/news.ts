import { Article } from '../entity'
import { Request, Response } from 'express'

export const getAll = (connection, req: Request, res: Response, next) => {
    connection
        .getRepository(Article)
        .find()
        .then((articles) => {
            res.render('news', { news: articles })
        })
}

export const getOne = (connection, req: Request, res: Response, next) => {
    connection
        .getRepository(Article)
        .findOne(req.params.id)
        .then((article) => {
            res.render('article', { content: article })
        })
}
