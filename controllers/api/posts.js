const Post = require('../../models/post')

const dataController = {
  // Index,
  index (req, res, next) {
    // WE WANT TO FIND ALL POSTS FROM ACCOUNTS WE FOLLOW ====> We are currently checking the id of our followers and finding all posts created by all followers
    // NEED TO FIGURE OUT HERE THE PARAMS TO FIND
    //Sort Posts by date
    // Post.find({blogId: {$in: following}}, (err, foundPosts) => {
    Post.find({}).populate('notes').exec((err, foundPosts) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        foundPosts.sort((a, b) => b.createdAt - a.createdAt)
        res.locals.data.posts = foundPosts
        next()
      }
    })
  },
  userIndex(req, res, next){
    Post.find({blogId: req.params.id}).populate('notes').exec((err, foundPosts) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        foundPosts.sort((a, b) => b.createdAt - a.createdAt)
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