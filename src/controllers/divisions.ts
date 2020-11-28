import { Players } from '../entity'
import { Request, Response } from 'express'

export const getAll = (req: Request, res: Response, next) => {
    Players.find().then((players) => {
        res.render('division', { title: 'All', players })
    })
}

export const getByGame = (req: Request, res: Response, next) => {
    Players.find({ where: { game: { slug: req.params.game } }, relations: ['game'] }).then((players) => {
        res.render('division', { title: players[0].game.name, players })
    })
}
