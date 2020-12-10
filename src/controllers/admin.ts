import { Request, Response } from 'express'
import { User } from '../entity'

export const getTest = (req: Request, res: Response, next) => {
    res.render('admin/test')
}
