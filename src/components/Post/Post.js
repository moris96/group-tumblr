import { useState } from "react"
import NewComment from "../NewComment/NewComment"

export default function Post({post, user}){
    const [showComments, setShowComment] = useState(null)
    const [createComment, setCreateComment] = useState(false)

    return(
        <div className="post">
            <h1>{post.title}</h1>
            <h3>{post.text}</h3>
            {post.imgLink ? <img src={post.imgLink}/> : ""}
            <button onClick={()=>setCreateComment(!createComment)}>Add Note</button>
            {createComment? <NewComment post={post}/>:""}
            <button>Share</button>
            <button>Like</button>
            {user == post.creator ? 
            <>
            <button>Delete</button>
            <button>Edit</button> 
            </>: ""}
        </div>
    )
}