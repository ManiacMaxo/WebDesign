import { Article } from '../entity'
import { Request, Response } from 'express'
import { getConnection } from 'typeorm'

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
