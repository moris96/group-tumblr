require('dotenv').config()

const db = require('./config/database')
const Post = require('./models/post')

const seedPosts = [
    {
        typeOfPost: "text",
        blogId: "63cd9926c233ad9ddcb9dd10",
        text: "First Post on tumblr",
        notes: []
    },
    {
        typeOfPost: "text",
        blogId: "63cd9926c233ad9ddcb9dd10",
        text: "Second Post",
        notes: []
    },
    {
        typeOfPost: "text",
        blogId: "63cd9926c233ad9ddcb9dd10",
        text: "Third Post",
        notes: []
    }
]

Post.create(seedPosts)
  .then((createdPosts) => {
    console.log(createdPosts)
    db.close()
  })
  .catch(err => {
    console.error(err)
    db.close()
  })
