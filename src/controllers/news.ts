import { Articles } from '../entity'
import { Request, Response } from 'express'

export const getAll = (req: Request, res: Response, next) => {
    Articles.find().then((articles) => {
        res.render('news', { news: articles })
    })
}

export const getOne = (req: Request, res: Response, next) => {
    Articles.findOne(req.params.id).then((article) => {
        res.render('article', { content: article })
    })
}
