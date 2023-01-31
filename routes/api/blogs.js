const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/blogs')

//add routes
// Index /api/blogs
router.get('/', dataController.index, apiController.index)
// THIS ROUTE MATCHES THE BLOG TO THE USER THAT OWNS THE BLOG
router.get('/user/:id', dataController.showUser, apiController.show)
//Delete /api/blogs/:id
router.delete('/:id', dataController.destroy, apiController.show)
//Update /api/blogs/:id
router.put('/:id', dataController.update, apiController.show)
//Create /api/blogs
router.post('/', dataController.create, apiController.show)
//Show /api/blogs/:id
router.get('/:id', dataController.show, apiController.show)


module.exports = router