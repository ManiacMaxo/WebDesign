import { Router } from 'express'
const router = Router()
import { body } from 'express-validator'
import { auth } from '../controllers'

import passport from 'passport'
import { initialize } from '../utils'
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
