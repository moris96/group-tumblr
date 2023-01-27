import { useState } from "react"
import NewComment from "../NewComment/NewComment"
import Notes from "../Notes/Notes"

export default function Post({post, user, newPostElement, setNewPostElement}){
    const [showComments, setShowComment] = useState(false)
    const [createComment, setCreateComment] = useState(false)
    const displayPostComments = () => {
        setShowComment(!showComments)
    }

    return(
        <div className="post">
            <h1>{post.title}</h1>
            <h3>{post.text}</h3>
            {post.imgLink ? <img src={post.imgLink}/> : ""}
            <button onClick={()=>setCreateComment(!createComment)}>Add Note</button>
            {createComment? 
            <NewComment post={post} 
            createComment={createComment}
            setCreateComment={setCreateComment}
            user={user}
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