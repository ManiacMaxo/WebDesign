import { Request, Response } from 'express'
import { User } from '../entity'

export const getTest = (req: Request, res: Response, next) => {
    return res.render('admin/test')
}
