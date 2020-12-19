import { Request, Response } from 'express'
import { User } from '../entity'
import bcrypt from 'bcrypt'
import { getConnection } from 'typeorm'
import { Input } from '../utils'

export const getLogin = (req: Request, res: Response, next) => {
    const fields = [
        new Input('email', 'email'),
        new Input('password', 'password')
    ]

    return res.render('auth', {
        action: 'login',
        title: 'Login',
        fields
    })
}

export const getRegister = (req: Request, res: Response, next) => {
    const fields = [
        new Input('name', 'text'),
        new Input('email', 'email'),
        new Input('password', 'password'),
        new Input('confirm password', 'password')
    ]

    return res.render('auth', {
        action: 'register',
        title: 'Register',
        fields
    })
}

export const postRegister = (req: Request, res: Response, next) => {
    const user = new User()

    user.name = req.body.name
    user.email = req.body.email

    bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
            user.password = hash
            const repo = getConnection().getRepository(User)
            repo.findOne({ email: user.email }).then((r) => {
                if (!r) {
                    repo.save(user)
                } else {
                    res.redirect('/register?err=exists')
                }
            })
        })
        .catch((e) => {
            res.redirect('/register')
        })
    res.redirect('/login')
}
