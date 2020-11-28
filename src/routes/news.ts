import { Router } from 'express'
const router = Router()
import { news } from '../controllers'

router.get('/', news.getAll())
