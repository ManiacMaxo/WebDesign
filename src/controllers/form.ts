import { Request, Response } from 'express'
import { Application } from '../entity'
import { Input } from '../utils'
import { getConnection } from 'typeorm'

export const getJoin = (req: Request, res: Response, next) => {
    const fields = [
        new Input('name', 'text'),
        new Input('game', 'text', null, 'small left'),
        new Input('age', 'number', null, 'small right'),
        new Input('email', 'email', 'email address'),
        new Input('youtube', 'youtube', null, '', false),
        new Input('twitter', 'text', null, '', false)
    ]
    // console.log(fields)
    res.render('form', { title: 'Join BAGUN | BAGUN Esports', fields })
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
