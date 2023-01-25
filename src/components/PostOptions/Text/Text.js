import { useState } from "react"

export default function Text(props){
    const [newPost, setNewPost] = useState({
        typeOfPost: "text",
        title: "",
        blogId: props.user._id,
        text: ""
    })

    const handleChange = (evt) => {
        setNewPost({...newPost, [evt.target.name]: evt.target.value})
    }

    const newpost = async () => {
        try {
            const response = await fetch(`/api/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...newPost})
            })
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>
            <h4>Post Title</h4><input name="title" value={newPost.title} onChange={handleChange}></input>
            <h4>Text</h4><input name="text" value={newPost.text} onChange={handleChange}></input>
            <button onClick={props.closeModal}>Close Modal</button>
        </>
    )
}