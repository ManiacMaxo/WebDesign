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

export const postLogin = (req: Request, res: Response, next) => {
    const { email, password } = req.body
    getConnection()
        .getRepository(User)
        .findOne({ where: { email } })
        .then((user) => {
            bcrypt.compare(password, user.password)
        })
}

export const getRegister = (req: Request, res: Response, next) => {
    const fields = [
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
    user.password = req.body.password
    getConnection().getRepository(User).save(user)
}
