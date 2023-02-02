import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import React from "react"
import NewComment from "../NewComment/NewComment"
import Notes from "../Notes/Notes"
import styles from "../Post/Post.module.scss"

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
            {foundBlog? <Link to={`/${post.blogId}`}>
                <span className={styles.postUserName}>{foundBlog.userName}</span>
                </Link>:""}
            <h1 className={styles.postTitle}>{post.title}</h1>
            <h3 className={styles.postText}>{post.text}</h3>
            <section className={styles.entryContainer}>
                {post.imgLink && (post.typeOfPost == 'photo') ? <img src={post.imgLink} height="auto" width="550px" /> : 
                (post.imgLink &&(post.typeOfPost == 'video'))?
                
                <iframe width="550" height="315"src={`https://www.youtube.com/embed/${post.imgLink}`}></iframe>:""}
                </section>
                <section className={styles.socialContainer}>
                    {post.notes ? 
                    <h4 onClick={displayPostComments}
                    className={styles.notes}>{post.notes.length} notes</h4>
                    :""}
                    <section className={styles.socialBtnContainer}>
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
                        <div><img className={styles.reblogIcon} src={process.env.PUBLIC_URL+"/iconsImg/reblog.png"} alt="reblog" /></div>
                        <div><img className={styles.likeIcon} src={process.env.PUBLIC_URL+ `/iconsImg/like-icon${Math.random()<.5 ? "":"-blue"}.png`} alt="like" /></div>
                    </section>
                </section>
            
            {showComments? 
            <Notes post={post}
            user={user}
            blog={blog}
            newPostElement={newPostElement}
            setNewPostElement={setNewPostElement}/>:""}
            {blog._id == post.blogId ? 
            <section className={styles.btnContainer}>
                <button onClick={deletePost} className={styles.deleteBtn}>Delete</button>
                <button className={styles.editBtn}>Edit</button> 
            </section>: ""}
        </div>
    )
}