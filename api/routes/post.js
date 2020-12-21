const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const controller = require('../controllers/postControllers')

//Get method
router.get('/', controller.getAllPostController)

router.get('/:id', controller.getSinglePost)

router.post('/', controller.postPostController)


router.put('/:id', controller.postUpdateController)
router.delete('/:id', controller.postDeleteController)

module.exports = router