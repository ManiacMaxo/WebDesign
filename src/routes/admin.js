const express = require('express')
const router = express.Router()
const controller = require('../controllers/admin')

router.get('/add-player', controller.getAddPlayer)

router.post('/add-player', controller.postAddPlayer)

module.exports = router
