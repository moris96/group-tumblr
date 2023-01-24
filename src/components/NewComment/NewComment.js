import { useState } from "react"

export default function NewComment({post}){
    const [newComment, setNewComment] = useState(null)
    const createComment = async () =>{
        const response = await fetch(`/api/comments`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...newComment})
        })
    }
    return(
        <>
            <h2>New Comment here</h2>
        </>
    )
}