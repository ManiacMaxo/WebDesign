import { Router } from 'express'
import { news } from '../controllers'
const router = Router()

router.get('/', news.getAll)

router.get('/:id', news.getOne)

export { router as news }
