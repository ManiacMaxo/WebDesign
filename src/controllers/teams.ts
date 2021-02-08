import { Request, Response } from 'express'
import { getConnection } from 'typeorm'
import { Player } from '../entity'

export const getAll = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Player)
        .find()
        .then((players) => {
            return res.render('team', { title: 'All', players })
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
                return res.render('team', {
                    title: players[0].games[0].name,
                    players
                })
            } catch (err) {
                return res.render('team', {
                    title: 'No players found',
                    players: []
                })
            }
        })
}

export const getPlayer = (req: Request, res: Response, next) => {
    getConnection()
        .getRepository(Player)
        .findOne({ slug: req.params.slug })
        .then((player) => {
            console.log('player requested:', player)
            console.log('work needed in `controllers/teams.ts`\n')
            return res.redirect('/teams')
        })
}
