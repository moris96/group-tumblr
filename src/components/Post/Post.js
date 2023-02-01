import { useState, useEffect } from "react"
import NewComment from "../NewComment/NewComment"
import Notes from "../Notes/Notes"
import styles from "../Post/Post.module.scss"
import { Link } from "react-router-dom"

export default function Post({post, user, blog, newPostElement, setNewPostElement}){
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

    const deletePost = async () => {
        try {
            await fetch(`/api/posts/${post._id}`,{
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setNewPostElement(!newPostElement)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        findBlog()
    }, [])

    return(
        <div className={styles.postContainer}>
            {foundBlog? <Link to={`/${post.blogId}`}>{foundBlog.userName}</Link>:""}
            {/* <h2>{user.username}</h2> */}
            <h1>{post.title}</h1>
            <h3>{post.text}</h3>
            <section className={styles.socialContainer}>
                {post.imgLink && (post.typeOfPost == 'photo') ? <img src={post.imgLink}/> : 
                (post.imgLink &&(post.typeOfPost == 'video'))?
                
                <iframe width="420" height="315"src={`https://www.youtube.com/embed/?${post.imgLink}`}></iframe>:""}
                    <div onClick={()=>setCreateComment(!createComment)}>
                    <img className={styles.commentIcon} src={process.env.PUBLIC_URL+"/iconsImg/comment-icon.png"} alt="comment" />    
                    </div>
                {createComment? 
                <NewComment post={post} 
                createComment={createComment}
                setCreateComment={setCreateComment}
                user={user}
                blog={blog}
                newPostElement={newPostElement}
                setNewPostElement={setNewPostElement}/>:""}
                <div><img className={styles.shareIcon} src={process.env.PUBLIC_URL+"/iconsImg/share-icon.png"} alt="share" /></div>
                <div><img className={styles.likeIcon} src={process.env.PUBLIC_URL+"/iconsImg/like-icon.png"} alt="like" /></div>
            </section>
            {post.notes ? 
            <h4 onClick={displayPostComments}>{post.notes.length} notes</h4>
            :""}
            {showComments? 
            <Notes post={post}
            user={user}
            blog={blog}
            newPostElement={newPostElement}
            setNewPostElement={setNewPostElement}/>:""}
            {blog._id == post.blogId ? 
            <>
            <button onClick={deletePost}>Delete</button>
            <button>Edit</button> 
            </>: ""}
        </div>
    )
}