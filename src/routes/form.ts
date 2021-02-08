import { Router } from 'express'
import { body } from 'express-validator'
import { form } from '../controllers'
const router = Router()

router.get('/join', form.getJoin)

router.post(
    '/join',
    [
        body('email').isEmail(),
        body('age').isNumeric(),
        body('name').isLength({ max: 32 }),
        body('twitter').isLength({ max: 32 }),
        body('game').isLength({ max: 32 }),
        body('email').isLength({ max: 64 }),
        body('youtube').isLength({ max: 64 })
    ],
    form.postJoin
)

export { router as form }
