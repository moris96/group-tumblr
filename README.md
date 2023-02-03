# tumblE [Link](https://tumble.herokuapp.com/)

# Product Description: 

### You were probably looking for Tumblr and you tumblE onto here. 

This project is a modern re-imagining of Tumblr.com. It includes a full suite of CRUD (Create, Read, Update, Delete) capabilities, allowing you to easily create, edit, view, and delete posts with ease.

## Developers: 
* Moris Khoudari 
* Michael O'Brien 
* Jerrick Lloyd
* Ashley Gutierrez 
* Abel Madera  
* Eddy Cueto 

---

## Technolodgies Used: 
* JavaScript
* HTML
* CSS
* MongoDB
* Express
* Node.js
* React.js

---

## NPM Packages 

* bcrypt 
* dotenv
* express 
* jsonwebtoken
* mongoose
* morgan
* nodemon
* react
* react-dom
* react-router-dom
* react-scripts
* reactjs-popup
* sass 
* serve-favicon
* uploader 

---

## Comparisons:
### One of the main questions of the project is the design choices we, as the group, have made. The simple answer to most of the design choices is quite simple ... Tumblr had it and our version of the app reflects that. From the very beginning, we saw Tumblr as a end product we wanted to get to. From the visual styling, icons and animations, we tried to emulate the site as much as possible that makes sense from a User perspective and either redesign or remove what didn't. Finally, there are some features that are missing from our version that are present in the official version, which can affect the user experience. These differences are important to keep in mind when using our version of the website.

---

## Trello: [trello](https://trello.com/b/mQXEPJhx/tumble)

## Pitchdeck: [pitchdeck](https://docs.google.com/presentation/d/1VP0e2CiRtnKbNwntj1UZyhn789i6hsCRTdlkOMteKUs/edit?usp=sharing)

---

## Pages: 
### Home Page: 
![homepage](/public/images/homepage.png)

### Login Page: 
![loginpage](/public/images/loginpage.png)

### Signup Page:
![signuppage](/public/images/signuppage.png)

### User Page:
![userpage](/public/images/userpage.png)

---

# Code Discussion: 
## Components: 
### NavBar: 
```JavaScript
const handleClick = (i) => {
    if (i === 0) {
      <HomePage />
    }
  }

  return(
    <div className="navBarContainer">
      <section className="nav-bar-left">
        <section className="logoNavBar">
          <Logo user={props}/>
        </section>
        <section className="searchNavBar">
          <SearchBar />
        </section>
      </section>
      <section className="nav-bar-right">
        <HomeBtn />
        <button className="explore-button  nav-button"><img className="explore-icon" src={process.env.PUBLIC_URL+"/iconsImg/7.png"} alt="explore" /></button>&nbsp;
        <button className="mail-button nav-button"><img className="mail-icon" src={process.env.PUBLIC_URL+"/iconsImg/5.png"} alt="explore" /></button>&nbsp;
        <button className="chat-button nav-button"><img className="chat-icon" src={process.env.PUBLIC_URL+"/iconsImg/4.png"} alt="chat" /></button>&nbsp;
        <Popup trigger={<button className="account-button nav-button"><img className="account-icon" src={process.env.PUBLIC_URL+"/iconsImg/2.png"} alt="account" /></button>} >{<Account user={props}/>}</Popup>
        <Popup trigger={<button className="post-button nav-button"><img className="post-icon" src={process.env.PUBLIC_URL+"/iconsImg/1.png"} alt="post" /></button>} modal nested>
          {close1=>(
          <PostOptions newPostElement={props.newPostElement} setNewPostElement={props.setNewPostElement} close1={close1} user={props.user} blog={props.blog}/>
          )}
        </Popup>
      </section>
    </div>
    )
```
#### This code demonstrates click popup functionality when you click a button to give you more button options in the navigation bar titled "NavBar", when navigating the website to the home page, creating a post, logging in or logging out, signing up, deleting an account, or going to your account page. 
![popupsMenu](/public/images/popup2.png)
![popups](/public/images/popup1.png)

## PostList: 
```JavaScript
const [posts, setPosts] = useState(null)
    const getPosts = async () => {
        try {
            const response = await fetch(`/api/posts`)
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getPosts()
    },[newPostElement])

  return (
    <section className={styles.postListContainer}>
      {/* <div>
        <p className={styles.avatar}></p>
      </div> */}
      <div className={styles.postListSection}>
      {posts ? posts.map((post) => {
        return <Post 
        key={post._id} 
        newPostElement={newPostElement} 
        setNewPostElement={setNewPostElement} 
        post={post} 
        user={user}
        blog={blog} />;
      }): "Nothing here"}
      </div>
    </section>
  );
```
#### What this code does is call in the api request to display all the posts made through a POST request. 

## PostOptions: 
```JavaScript
return (
    <section className={styles.postOptionsContainer}>
      <Popup trigger={<div><Circle num="0" text="Text" /></div>} modal>
        {close => (
          <div>
            <Text close1={props.close1}
            close={close}
            user={props.user}
            blog={props.blog}
            newPostElement={props.newPostElement}
            setNewPostElement={props.setNewPostElement} />
            <a className="close" onClick={close}>
              &times;
            </a>
          </div>  
        )}
      </Popup>
      <Popup trigger={<div><Circle num="1" text="Photos"></Circle></div>} modal>
        {close => (<div>
          <Photo onClick close1={props.close1}
          close={close}
          user={props.user}
          blog={props.blog}
          newPostElement={props.newPostElement}
          setNewPostElement={props.setNewPostElement} />
          <a className="close" onClick={close}>
            &times;
          </a> 
          </div>
        )}
      </Popup>

      <Circle num="2" text="QUOTES"></Circle>
      <Circle num="3" text="LINKS"></Circle>
      <Circle num="4" text="CHAT"></Circle>
      <Circle num="5" text="AUDIO"></Circle>
      
      <Popup trigger={<div><Circle num="6" text="VIDEO"></Circle></div>} modal>
        {close => (<div>
          <Video onClick close1={props.close1}
          close={close}
          user={props.user}
          blog={props.blog}
          newPostElement={props.newPostElement}
          setNewPostElement={props.setNewPostElement} />
          <a className="close" onClick={close}>
            &times;
          </a> 
          </div>
        )}
      </Popup>
      
      
      
    </section>  
  )
}
var srcs = ["text", "photos", "quote", "link", "chat", "audio", "video"]
function Circle(props){
  return (<>
  <div className={`${styles.circleContainer}`}>
    <div className={`${styles.circle} ${styles[`circle${props.num}`]}`}>
      <img src={process.env.PUBLIC_URL+`/iconsImg/${srcs[props.num]}.png`}></img>

      </div>
      <div className={styles.wordContainer}>
          <p className={styles.photos}>{props.text}</p>&nbsp;
        </div>
    
  </div>
  </>)
```
#### What this code does is display the types of post options a user can make. Below is an example of a photo post option. 
![popups](/public/images/popup1.png)
![photopost](/public/images/photoPost.png)
![postoption](/public/images/postOption.png)

## SuggestedFollows: 
```JavaScript
const [blogs, setBlogs] = useState(null)
  const [linkUsers, setLinkUsers] = useState(null)
  const foundUser = useParams()

  const getBlogs = async () => {
    try {
      const response = await fetch(`/api/blogs`)
      const data = await response.json()
      setBlogs(data)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    getBlogs()
  }, [])


  return (
    <section className={styles.suggestedContainer}>
      <h1 classsName={styles.suggestedTitle}>
        Check out these blogs
      </h1>
      <hr/>
        {blogs ? blogs.slice(0, 5).map((blog) => {
          return <h4 key={blog.id}>
            {blog.userName}
            </h4> 
        }): "No users to show"}
    </section>
  )
```
#### What this code does is display all the users who have made a post as "follow suggestions" for other users to follow 
![suggestedfollows](/public/images/suggestedfollows.png)

---

## ERD (entity relationship diagram): 
![erd](/public/images/erd.png)

---

## Models:
### blog: This is the schematic for the main blog model. The blog model itself is the post that is shown on the homepage. 
```JavaScript
const { Schema, model } = require('mongoose')

const blogSchema = new Schema ({
    user: {type: String},
    userName: {type: String},
    following:[{type: String}]
  },{
    timestamps: true,
  
})

const Blog = model('Blog', blogSchema)


module.exports = Blog
``` 

### comment: This is the schematic for the comment model. The comment model itself allows a user to comment on a blog post. 
```JavaScript
const {Schema,model} = require('mongoose')

const noteSchema = new Schema ({
    postId: {type: String},
    text: {type: String},
    likes: {type: Number},
    createdBy: {type: String}
})

const Comment = model('Note', noteSchema)

module.exports = Comment
```

### post: This is the schematic for the main post model which returns the ID of a post (text, photo, video)
```JavaScript
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
```

### user: The main schematic for the user model when signing up or loging in 
```JavaScript
//require mongoose
const { Schema, model } = require('mongoose')
//require bcrypt
const bcrypt = require('bcrypt')

// SALT_ROUNDS 
const SALT_ROUNDS = 6

const userSchema = new Schema ({
  profilePicture: {type: String},
  username: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 6,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  tumblrUrl: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  post: [{
    type: Schema.Types.ObjectId,
    ref: 'Posts'
  }],
  following:[{type: String}]
}, {
    timestamps: true,
    toJSON: {
      transform (doc, ret) {
        delete ret.password
        return ret
      }
    }
})

userSchema.pre('save', async function (next) {
  // 'this' is the user doc
  if (!this.isModified('password')) return next()
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
  return next()
})

module.exports = model('User', userSchema)
```

---

## Routes: 

POSTS: 
| Action | URL |  HTTP Verb |
|----------|----------|----------|
| Index | /api/posts | GET |
| Show | /api/posts/:id | GET |
| Create | /api/posts/ | POST |
| Update | /api/posts/:id | PUT |
| Delete | /api/posts/:id | DELETE |

BLOGS: 
| Action | URL |  HTTP Verb |
|----------|----------|----------|
| Index | /api/blogs | GET |
| Show | /api/blogs/:id | GET |
| Create | /api/blogs/ | POST |
| Update | /api/blogs/:id | PUT |
| Delete | /api/blogs/:id | DELETE |

COMMENTS: 
| Action | URL |  HTTP Verb |
|----------|----------|----------|
| Index | /api/comments | GET |
| Show | /api/comments/:id | GET |
| Create | /api/comments/ | POST |
| Update | /api/comments/:id | PUT |
| Delete | /api/comments/:id | DELETE |

USERS:
| Action | URL |  HTTP Verb |
|----------|----------|----------|
| Index | /api/users | POST |
| Show | /api/users/login| POST |
| Create | /api/users/check-token | GET |

--- 

## Ice box

* Avatar/Profile Picture Component
* More post options
* Messaging feature
* Search feature
* More User customizations
* "Sign in with Google/Apple" feature

---
# SPRINT RETROSPECTIVES  

## Key Learnings / Takeaways: 
* Going in depth on the fullstack of a social media app By using React.js to create a single page social media app with full CRUD functionality and RESTful routes working. We had to install different packages such as popup 
* Learning how to effieciently make pull requests on GitHub without breaking the code 
* Working efficiently with new people on a new team to meet deliverables and deadlines 

--- 

## Things we could improve on: 
* Team communication and coordination. For most of the cohort we worked on individual projects, so assigning tasks to group members and making sure they're getting it completed was new for us since we never worked with each other on the same team 
* Pull requests on GitHub 