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

    const postNow = async () => {
        try {
            const response = await fetch(`/api/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...newPost})
            })
            setNewPost({
                typeOfPost: "text",
                title: "",
                blogId: props.user._id,
                text: ""
            })
            props.close()
            props.close1()
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>
            <h4>Post Title</h4><input name="title" value={newPost.title} onChange={handleChange}></input>
            <h4>Text</h4><input name="text" value={newPost.text} onChange={handleChange}></input>
            <button onClick={postNow}>Post now</button>
        </>
    )
}