const { Schema, model } = require('mongoose')

const blogSchema = new Schema ({
    user: {type: String},
    userName: {type: String},
    following:[{type: String}],
    likedPosts: [{type: String}]
  },{
    timestamps: true,
  
})

const Blog = model('Blog', blogSchema)


module.exports = Blog