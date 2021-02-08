import { Router } from 'express'
import { admin } from '../controllers'
const router = Router()

router.get('/test', admin.getTest)

export { router as admin }
