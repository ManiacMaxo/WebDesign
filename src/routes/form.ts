import { Router } from 'express'
const router = Router()
import { form } from '../controllers'

router.get('/join', form.getJoin)

router.post('/join', form.postJoin)

export { router as form }
