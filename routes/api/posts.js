const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/posts')

//add routes
// Index /api/posts
router.get('/', dataController.index, apiController.index)
//Index route for all users you follow
router.get('/blog/:id', dataController.blogIndex, apiController.index)
// Index of posts for each user
router.get('/user/:id', dataController.userIndex, apiController.index)
//Delete /api/posts/:id
router.delete('/:id', dataController.destroy, apiController.show)
//Update /api/posts/:id
router.put('/:id', dataController.update, apiController.show)
//Create /api/posts
router.post('/', dataController.create, apiController.show)
//Show /api/posts/:id
router.get('/:id', dataController.show, apiController.show)


module.exports = router 