const express = require('express')
const router = express.Router()
const controller = require('../controllers/form')

router.get('/join', controller.getJoin)

router.post('/join', controller.postJoin)

router.get('/login', controller.getLogin)

router.post('/login', controller.postLogin)

router.post('/logout', controller.postLogout)

router.get('/register', controller.getRegister)

router.post('/register', controller.postRegister)

module.exports = router
