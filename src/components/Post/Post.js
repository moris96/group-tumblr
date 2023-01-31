import { useEffect, useState } from "react"
import NewComment from "../NewComment/NewComment"
import Notes from "../Notes/Notes"
import { Link } from 'react-router-dom'
import styles from './Post.module.scss'

export default function Post({post, user, newPostElement, setNewPostElement, blog}){
    const [showComments, setShowComment] = useState(false)
    const [createComment, setCreateComment] = useState(false)
    const [foundBlog, setFoundBlog] = useState(null)
    const displayPostComments = () => {
        setShowComment(!showComments)
    }
    const findBlog = async () => {
        try {
            const response = await fetch(`/api/blogs/${post.blogId}`)
            const data = await response.json()
            setFoundBlog(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        findBlog()
    }, [])
    return(
        <div className={styles.post}>
            {foundBlog? <Link to={`/${post.blogId}`}>{foundBlog.userName}</Link>:""}
            <h1>{post.title}</h1>
            <h3>{post.text}</h3>
            {post.imgLink ? <img src={post.imgLink}/> : ""}
            <button onClick={()=>setCreateComment(!createComment)}>Add Note</button>
            {createComment? 
            <NewComment post={post} 
            createComment={createComment}
            setCreateComment={setCreateComment}
            user={user}
            blog={blog}
            newPostElement={newPostElement}
            setNewPostElement={setNewPostElement}/>:""}
            <button>Share</button>
            <button>Like</button>
            {post.notes ? 
            <h4 onClick={displayPostComments}>{post.notes.length} notes</h4>
            :""}
            {showComments? 
            <Notes post={post}
            user={user}
            blog={blog}
            newPostElement={newPostElement}
            setNewPostElement={setNewPostElement}/>:""}
            {blog == post.blogId ? 
            <>
            <button>Delete</button>
            <button>Edit</button> 
            </>: ""}
        </div>
    )
}