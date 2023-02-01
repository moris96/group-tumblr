import { useState } from "react"


export default function Video(props){
  const [newPost, setNewPost] = useState({
    typeOfPost: "video",
    title: "",
    imgLink: "",
    blogId: props.blog._id,
    text: ""
})

const handleChange = (evt) => {
    setNewPost({...newPost, [evt.target.name]: evt.target.value})
}

const postNow = async () => {
    let start = 0
    let finish = 0
    for(let i=0; i<newPost.imgLink.length;i++) {
        if(newPost.imgLink[i]==="?"){
            start = i+3
        }
        if(newPost.imgLink[i]==="&"){
            finish = i
        }
    }
    newPost.imgLink = newPost.imgLink.substring(start, finish)
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
            text: ""
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
        <h4>Youtube Link</h4><input name="imgLink" value={newPost.imgLink} onChange={handleChange}></input>
        <h4>Text</h4><input name="text" value={newPost.text} onChange={handleChange}></input>
        <button onClick={postNow}>Post now</button>
    </>
)
}