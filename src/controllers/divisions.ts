import { Player } from '../entity'
import { Request, Response } from 'express'
import { getConnection } from 'typeorm'

export const getAll = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Player)
        .find()
        .then((players) => {
            res.render('division', { title: 'All', players })
        })
}

export const getByGame = (req: Request, res: Response, next) => {
    console.log(req.params.game)
    getConnection()
        .getRepository(Player)
        .createQueryBuilder('players')
        .leftJoinAndSelect('players.games', 'game')
        .where('game.slug = :slug', { slug: req.params.game })
        .getMany()
        .then((players) => {
            res.render('division', { title: 'title', players })
        })
}
