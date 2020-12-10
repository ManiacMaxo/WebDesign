import { Request, Response } from 'express'
import { Application } from '../entity'
import { getConnection } from 'typeorm'

export const getJoin = (req: Request, res: Response, next) => {
    const fields = [
        {
            name: 'name',
            type: 'text'
        },
        {
            name: 'email',
            type: 'email'
        },
        {
            name: 'twitter',
            type: 'text'
        },
        {
            name: 'youtube',
            type: 'text'
        },
        {
            name: 'game',
            type: 'text'
        },
        {
            name: 'age',
            type: 'number'
        }
    ]

    res.render('form', { title: 'join bagun', fields: fields })
}

export const postJoin = (req: Request, res: Response, next) => {
    const application = new Application()

    application.name = req.body.name
    application.email = req.body.email
    application.twitter = req.body.twitter
    application.youtube = req.body.youtube
    application.game = req.body.game
    application.age = req.body.age

    try {
        const repo = getConnection().getRepository(Application)
        repo.findOne({ where: { email: application.email } }).then((r) => {
            if (!r) {
                repo.save(application)
                res.redirect('/')
            } else {
                res.redirect('/join?exists=true')
            }
        })
    } catch (e) {
        console.log(e)
        res.redirect('/')
    }
}
