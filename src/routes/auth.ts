import { Router } from 'express'
const router = Router()
import { auth } from '../controllers'

router.get('/login', auth.getLogin)

router.post('/login', auth.postLogin)

router.get('/register', auth.getRegister)

router.post('/register', auth.postRegister)

export { router as auth }
