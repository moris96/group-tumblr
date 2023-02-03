const {Schema,model} = require('mongoose')

const noteSchema = new Schema ({
    postId: {type: String},
    text: {type: String},
    likes: {type: Number},
    createdBy: {type: String}
})

const Comment = model('Note', noteSchema)

module.exports = Comment