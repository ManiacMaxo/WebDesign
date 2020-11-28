import { Router } from 'express'
const router = Router()
import { index } from '../controllers'

router.get('/', index.getIndex)

router.get('/about', index.getAbout)

router.get('/tos', index.getTOS)

router.get('/shop', index.getShop)

export { router as root }
