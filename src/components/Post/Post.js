import { useState } from "react"
import NewComment from "../NewComment/NewComment"
import Notes from "../Notes/Notes"

export default function Post({post, user, newPostElement, setNewPostElement}){
    const [showComments, setShowComment] = useState(false)
    const [createComment, setCreateComment] = useState(false)
    const displayPostComments = () => {
        setShowComment(!showComments)
    }