import { Request, Response } from 'express'

export const getTest = (req: Request, res: Response, next) => {
    return res.render('index')
}
