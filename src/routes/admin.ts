import { Router } from 'express'
const router = Router()
import { admin } from '../controllers'

router.get('/test', admin.getTest)

export { router as admin }
