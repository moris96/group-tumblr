import { useState } from "react"

export default function ReBlog({post, blog, setNewPostElement, newPostElement, close}){
    const [reBloggedPost, setReBloggedPost] =  useState({
        typeOfPost: post.typeOfPost,
        title: post.title,
        imgLink: post.imgLink,
        blogId: blog._id,
        text: post.text
    })

    const reblog = async () => {
        try {
            await fetch(`/api/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...reBloggedPost})
            })
            setNewPostElement(!newPostElement)
            close()
        } catch (error) {
            console.error(error)
        }
    }
    
    return(
        <>
            <h1>{post.title}</h1>
            <h3>{post.text}</h3>
            <section>
            {post.imgLink && post.typeOfPost == "photo" ? (
            <img src={post.imgLink} height="400" width="400" />
            ) : post.imgLink && post.typeOfPost == "video" ? (
            <iframe
                width="420"
                height="315"
                src={`https://www.youtube.com/embed/${post.imgLink}`}
            ></iframe>
            ) : (
            ""
            )}
            </section>
            <button onClick={reblog}>Reblog This Post</button>
        </>
    )
}