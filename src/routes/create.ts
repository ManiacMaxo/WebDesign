import { Router } from 'express'
const router = Router()
import { news } from '../controllers'
import multer from 'multer'

router.get('/article', news.getCreateArticle)

const upload = multer({ dest: __dirname + '/../../uploads/images' })
router.post('/article', upload.single('thumbnail'), news.postCreateArticle)

export { router as create }
