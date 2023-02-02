import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import NewComment from "../NewComment/NewComment"
import Notes from "../Notes/Notes"
import styles from "../Post/Post.module.scss"
import Popup from "reactjs-popup"
import Text from "../PostOptions/Text/Text"
import Video from "../PostOptions/Video/Video"
import ReBlog from "../ReBlog/ReBlog"

export default function Post({post, user, blog, newPostElement, setNewPostElement}){
    const [showComments, setShowComment] = useState(false)
    const [createComment, setCreateComment] = useState(false)
    const [foundBlog, setFoundBlog] = useState(null)
    const displayPostComments = () => {
        setShowComment(!showComments)
    }

    // const updateOptions = [
    //     {
    //         type: "text",
    //         component: <Text />
    //     },
    //     {
    //         type: "video",
    //         component: <Video />
    //     }        
    // ]


    const findBlog = async () => {
        try {
            const response = await fetch(`/api/blogs/${post.blogId}`)
            const data = await response.json()
            setFoundBlog(data)
        } catch (error) {
            console.error(error)
        }
    }

    // const updateBlog = async (updatedData) => {

    //     try {
    //         await fetch(`/api/post/${post._id}`, {
    //             method: "PUT",
    //             header: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({...updatedData})
    //         })
    //         setNewPostElement(newPostElement)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

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
            {/* <h2>{user.username}</h2> */}
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
                        <Popup modal trigger={<div><img className={styles.reblogIcon} src={process.env.PUBLIC_URL+"/iconsImg/reblog.png"} alt="reblog" /></div>}>
                        {(close) => (
                            <>
                                <ReBlog
                                post={post}
                                blog={blog}
                                newPostElement={newPostElement}
                                setNewPostElement={setNewPostElement}
                                close={close}
                                />
                                <a className="close" onClick={close}>
                                &times;
                                </a>
                            </>
                            )}
                        </Popup>
                        <div><img className={styles.likeIcon} src={process.env.PUBLIC_URL+"/iconsImg/like-icon.png"} alt="like" /></div>
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