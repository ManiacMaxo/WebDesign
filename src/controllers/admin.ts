import { Request, Response } from 'express'
import { getConnection } from 'typeorm'

export const getTest = (req: Request, res: Response, next) => {
    return res.render('index')
}
