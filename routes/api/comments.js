const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/comments')

//add routes
// Index /api/comments
router.get('/', dataController.index, apiController.index)
//Delete /api/comments/:id
router.delete('/:id', dataController.destroy, apiController.show)
//Update /api/comments/:id
router.put('/:id', dataController.update, apiController.show)
//Create /api/comments
router.post('/', dataController.create, apiController.show)
//Show /api/comments/:id
router.get('/:id', dataController.show, apiController.show)


module.exports = router 