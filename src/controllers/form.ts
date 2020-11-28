import { Request, Response } from 'express'

export const getJoin = (req: Request, res: Response, next) => {
    const fields = [
        {
            name: 'name',
            required: true,
            type: 'text',
        },
        {
            name: 'email',
            required: true,
            type: 'email',
        },
        {
            name: 'twitter',
            type: 'text',
        },
        {
            name: 'youtube',
            required: true,
            type: 'text',
        },
        {
            name: 'game',
            required: true,
            type: 'text',
        },
        {
            name: 'age',
            required: true,
            type: 'number',
        },
    ]

    res.render('form', { action: 'join', title: 'join bagun', fields: fields })
}

export const postJoin = (req: Request, res: Response, next) => {}
