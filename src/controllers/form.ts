import { Request, Response } from 'express'
import { Application } from '../entity'
import { Input } from '../utils'
import { getConnection } from 'typeorm'
import { validationResult } from 'express-validator'

export const getJoin = (req: Request, res: Response, next) => {
    const fields = [
        new Input('name', 'text'),
        new Input('game', 'text', null, 'small left'),
        new Input('age', 'number', null, 'small right'),
        new Input('email', 'email', 'email address'),
        new Input('youtube', 'youtube', null, '', false),
        new Input('twitter', 'text', null, '', false)
    ]
    return res.render('form', { title: 'Join BAGUN | BAGUN Esports', fields })
}

export const postJoin = (req: Request, res: Response, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.redirect('/join?err=incorrect')
    }

    const application = new Application()

    application.name = req.body.name
    application.game = req.body.game
    application.age = req.body.age
    application.email = req.body.email
    application.twitter = req.body.twitter
    application.youtube = req.body.youtube

    const repo = getConnection().getRepository(Application)
    repo.findOne({ email: application.email }).then((r) => {
        if (!r) {
            repo.save(application).catch((e) => {
                console.log(e)
                res.redirect('/join?err=unknown')
            })

            res.redirect('/')
        } else {
            res.redirect('/join?err=exists')
        }
    })
}
