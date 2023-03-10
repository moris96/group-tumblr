import { useState } from "react"


export default function Photo(props){
  const [newPost, setNewPost] = useState({
    typeOfPost: "photo",
    title: "",
    imgLink: "",
    blogId: props.blog._id,
    text: "",
    reBlogged: 0,
    likes: 0
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
            blogId: props.blog._id,
            text: "",
            reBlogged: 0,
            likes: 0
        })
        props.setNewPostElement(!props.newPostElement)
        props.close()
        props.close1()
    } catch (error) {
        console.error(error)
    }
}
return(
    <>
        <h4>Post Title</h4><input name="title" value={newPost.title} onChange={handleChange}></input>
        <h4>Image Link</h4><input name="imgLink" value={newPost.imgLink} onChange={handleChange}></input>
        <h4>Text</h4><input name="text" value={newPost.text} onChange={handleChange}></input>
        <button onClick={postNow}>Post now</button>
    </>
)
}