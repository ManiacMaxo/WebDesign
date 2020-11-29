import { Request, Response } from 'express'
import { User } from '../entity'
import bcrypt from 'bcrypt'
import { getConnection } from 'typeorm'

export const getLogin = (req: Request, res: Response, next) => {
    const fields = [
        {
            name: 'email',
            required: true,
            type: 'email',
        },
        {
            name: 'password',
            required: true,
            type: 'password',
        },
    ]

    res.render('form', {
        action: 'login',
        title: 'login',
        fields,
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
        {
            name: 'email',
            required: true,
            type: 'email',
        },
        {
            name: 'password',
            required: true,
            type: 'password',
        },
        {
            name: 'confirm password',
            required: true,
            type: 'password',
        },
    ]
    res.render('form', {
        action: 'register',
        title: 'register',
        fields,
    })
}

export const postRegister = (req: Request, res: Response, next) => {
    const user = new User()
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password
    getConnection().getRepository(User).save(user)
}
