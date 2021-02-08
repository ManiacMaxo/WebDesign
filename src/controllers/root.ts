import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import { Info, User } from '../entity'

export const getIndex = (req: Request, res: Response, next) => {
    return res.render('index')
}

export const getAbout = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Info)
        .findOne(1)
        .then((content) => {
            return res.render('info', { content })
        })
}

export const getTOS = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Info)
        .findOne(2)
        .then((content) => {
            return res.render('info', { content })
        })
}

export const getCookies = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Info)
        .findOne(3)
        .then((content) => {
            return res.render('info', { content })
        })
}

export const getPrivacy = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Info)
        .findOne(4)
        .then((content) => {
            return res.render('info', { content })
        })
}

export const getShop = (req: Request, res: Response, next) => {
    return res.redirect('/')
}

export const checkAuth = (req: Request, res: Response, next) => {
    if (req.isAuthenticated()) {
        return next()
    } else {
        return res.redirect('/login')
    }
}

export const checkAdmin = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(User)
        .findOne(req.user)
        .then((user) => {
            if (user) {
                next()
            } else {
                return res.redirect('/login')
            }
        })
}
