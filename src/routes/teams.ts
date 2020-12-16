import { Router } from 'express'
const router = Router()
import { teams } from '../controllers'

router.get('/', teams.getAll)

router.get('/:game', teams.getByGame)

router.get('/players/:slug', teams.getPlayer)

export { router as teams }
