import { Router } from 'express'
import { teams } from '../controllers'
const router = Router()

router.get('/', teams.getAll)

router.get('/:game', teams.getByGame)

router.get('/players/:slug', teams.getPlayer)

export { router as teams }
