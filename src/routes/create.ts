import { Router } from 'express'
import multer from 'multer'
import { news } from '../controllers'
const router = Router()

router.get('/article', news.getCreateArticle)

const upload = multer({
    dest: __dirname + '/../../public/uploads/images'
})
router.post('/article', upload.single('thumbnail'), news.postCreateArticle)

export { router as create }
