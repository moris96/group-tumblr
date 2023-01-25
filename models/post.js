const { Schema, model } = require('mongoose')

const postSchema = new Schema ({
  typeOfPost: {
    type: String,
  },
  title: {
    type: String,
  },
  blogId: {
    type: String,
  },
  text: {
    type: String,
  },
  imgLink: {
    type: String
  },
  notes: [{type: Schema.Types.ObjectId, ref: 'Note'}]
},{
    timestamps: true,
  
})

const Post = model('Post', postSchema)


module.exports = Post