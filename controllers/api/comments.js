const Comment = require('../../models/comment')

const dataController = {
  // Index,
  index (req, res, next) {
    //====NEED TO FIND COMMENT THAT ARE CHILDREN OF A SPECIFIC POST=====
    Comment.find({}, (err, foundComments) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comments = foundComments
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = deletedComment
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = updatedComment
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    Comment.create(req.body, (err, createdComment) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.comment = createdComment
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Comment.findById(req.params.id, (err, foundComment) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a fruit with that ID'
        })
      } else {
        res.locals.data.comment = foundComment
        next()
      }
    })
  }
}

const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.comments)
    },
    show (req, res, next) {
      res.json(res.locals.data.comment)
    }
  }

module.exports = { dataController, apiController }