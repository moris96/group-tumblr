import { useState } from "react"
import styles from "./NewComment.module.scss"

export default function NewComment({post, createComment, setCreateComment, user, blog, setNewPostElement, newPostElement}){
    const [newComment, setNewComment] = useState({
        postId: post._id,
        text: "",
        likes: 0,
        createdBy: blog._id
    })


    const createComment2 = async () =>{
        try {
            const response = await fetch(`/api/comments`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...newComment})
            })
            const data = await response.json()
            const allPosts = [...post.notes,data._id]
            console.log(allPosts)
            const response2 = await fetch(`/api/posts/${post._id}`,{
                method: "PUT",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({notes: allPosts})
            })
            setNewComment({
                postId: post._id,
                text: "",
                likes: 0,
                createdBy: blog._id
            })
            setCreateComment(!createComment)
            setNewPostElement(!newPostElement)
        } catch (error) {
            console.error(error)
        }


    }
    const handleChange = (evt) => {
        setNewComment({...NewComment, [evt.target.name]: evt.target.value,
        postId: post._id,
        likes: 0,
        createdBy: blog._id})
    }
    return(
        <>  <span className={styles.textContainer}>  
            <textarea type="text" value={newComment.text} placeholder="New Note" name='text' onChange={handleChange}></textarea>
            <input type="submit" value="Post" onClick={createComment2}></input>
            </span>
        </>
    )
}