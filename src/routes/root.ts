import { Router } from 'express'
import { index } from '../controllers'
const router = Router()

router.get('/', index.getIndex)

router.get('/about', index.getAbout)

router.get('/tos', index.getTOS)

router.get('/cookies', index.getCookies)

router.get('/privacy', index.getPrivacy)

router.get('/shop', index.getShop)

export { router as root }
