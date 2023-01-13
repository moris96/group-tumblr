const { Schema, model } = require('mongoose')

const postsSchema = new Schema ({
  id: {type: String},
  typeOfPost: {
    type: String,
  },
  blogId: {
    type: String,
  },
  text: {
    type: String,
  },
  notes: {
    type: String,
  }
},{
    timestamps: true,
  
})


module.exports = model('Posts', postsSchema)