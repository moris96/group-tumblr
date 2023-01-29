import { useState } from "react"
import NewComment from "../NewComment/NewComment"
import Notes from "../Notes/Notes"
import styles from "../Post/Post.module.scss"

export default function Post({post, user, newPostElement, setNewPostElement}){
    const [showComments, setShowComment] = useState(false)
    const [createComment, setCreateComment] = useState(false)
    const displayPostComments = () => {
        setShowComment(!showComments)
    }

    return(
        <div className={styles.postContainer}>
            <h2>{user.username}</h2>
            <h1>{post.title}</h1>
            <h3>{post.text}</h3>
            <section className={styles.socialContainer}>
                {post.imgLink ? <img src={post.imgLink}/> : ""}
                    <div onClick={()=>setCreateComment(!createComment)}>
                    <img className={styles.commentIcon} src={process.env.PUBLIC_URL+"/iconsImg/comment-icon.png"} alt="comment" />    
                    </div>
                {createComment? 
                <NewComment post={post} 
                createComment={createComment}
                setCreateComment={setCreateComment}
                user={user}
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
            newPostElement={newPostElement}
            setNewPostElement={setNewPostElement}/>:""}
            {user == post.creator ? 
            <>
            <button>Delete</button>
            <button>Edit</button> 
            </>: ""}
        </div>
    )
}