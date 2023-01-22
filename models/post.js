const { Schema, model } = require('mongoose')

const postSchema = new Schema ({
  typeOfPost: {
    type: String,
  },
  blogId: {
    type: String,
  },
  text: {
    type: String,
  },
  notes: [{type: Schema.Types.ObjectId, ref: 'Notes'}]
},{
    timestamps: true,
  
})

const Post = model('Post', postSchema)


module.exports = Post