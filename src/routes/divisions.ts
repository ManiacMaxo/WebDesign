import { Router } from 'express'
const router = Router()
import { divisions } from '../controllers'

router.get('/', divisions.getAll)

router.get('/:game', divisions.getByGame)

export { router as divisions }
