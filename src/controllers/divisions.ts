import { Players } from '../entity'
import { Request, Response } from 'express'

export const getAll = (req: Request, res: Response, next) => {
    Players.find().then((players) => {
        res.render('division', { title: 'All', players: players })
    })
}

export const getByGame = (req: Request, res: Response, next) => {
    if (req.params.game === 'all') {
        res.redirect('/divisions')
    } else {
        // Players.find({ game: string(req.params.game) })
        console.log('help')
        res.redirect('/')
    }
}
