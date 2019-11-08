const express = require('express')
const router = express.Router()

const queryController = require('../app/controllers/queryController')

router.post('/query-build', queryController.create)

module.exports= router