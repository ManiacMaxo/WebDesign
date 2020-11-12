const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')

router.get('/', controller.getIndex)

router.get('/shop', controller.getShop)

router.get('/about', controller.getAbout)

router.get('/tos', controller.getTOS)

module.exports = router
