const Post = require('../../models/post')

const dataController = {
  // Index,
  index (req, res, next) {
    // WE WANT TO FIND ALL POSTS FROM ACCOUNTS WE FOLLOW
    // NEED TO FIGURE OUT HERE THE PARAMS TO FIND
    Post.find({user: following}, (err, foundPosts) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.posts = foundPosts
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = deletedPost
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPost) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = updatedPost
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    Post.create(req.body, (err, createdPost) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.post = createdPost
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Post.findById(req.params.id, (err, foundPost) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find post'
        })
      } else {
        res.locals.data.post = foundPost
        next()
      }
    })
  }
}

const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.posts)
    },
    show (req, res, next) {
      res.json(res.locals.data.post)
    }
  }

module.exports = { dataController, apiController }