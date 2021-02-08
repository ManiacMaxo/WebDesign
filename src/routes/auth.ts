import { Router } from 'express'
import { body } from 'express-validator'
import passport from 'passport'
import { auth } from '../controllers'
import { initialize } from '../utils'
const router = Router()

initialize(passport)

router.get('/login', auth.getLogin)

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login?err=passport',
        failureFlash: true
    })
)

router.get('/register', auth.getRegister)

router.post(
    '/register',
    [body('email').isEmail(), body('password').isLength({ min: 8 })],
    auth.postRegister
)

export { router as auth }
