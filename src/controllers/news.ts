import { Article } from '../entity'
import { Request, Response } from 'express'
import { getConnection } from 'typeorm'

export const getAll = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Article)
        .find()
        .then((articles) => {
            res.render('news', { news: articles })
        })
}

export const getOne = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Article)
        .findOne(req.params.id)
        .then((article) => {
            res.render('article', { content: article })
        })
}
