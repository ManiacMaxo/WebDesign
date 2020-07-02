const express = require('express')
const router = express.Router()
const controller = require('../controllers/divisions')

router.get('/', controller.getAllPlayers)

router.get('/:game', controller.getByGame)

module.exports = router
