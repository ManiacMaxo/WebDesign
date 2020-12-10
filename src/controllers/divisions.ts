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
    getConnection()
        .getRepository(Player)
        .createQueryBuilder('players')
        .leftJoinAndSelect('players.games', 'game')
        .where('game.slug = :slug', { slug: req.params.game })
        .getMany()
        .then((players) => {
            try {
                res.render('division', {
                    title: players[0].games[0].name,
                    players
                })
            } catch (err) {
                res.render('division', {
                    title: 'No players found',
                    players: []
                })
            }
        })
}

export const getPlayer = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Player)
        .findOne({ where: { slug: req.params.slug } })
        .then((player) => {
            console.log('player requested:', player)
            console.log('work needed in `controllers/divisions.ts`\n')
            res.redirect('/divisions')
        })
}
