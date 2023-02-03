require('dotenv').config()

const db = require('./config/database')
const Post = require('./models/post')

const seedPosts = [
    {
        typeOfPost: "text",
        title: "No 1",
        blogId: "63cd9926c233ad9ddcb9dd10",
        text: "First Post on tumblr",
        imgLink: "https://media.distractify.com/brand-img/kiq5v13SX/0x0/tumblr-logo-color-1667404364560.jpg",
        notes: []
    },
    {
        typeOfPost: "text",
        title: "Harry Maguire GOAT",
        blogId: "63cd9926c233ad9ddcb9dd10",
        text: "Second Post",
        notes: []
    },
    {
        typeOfPost: "text",
        title: "Yankees Suck!",
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
