import userEvent from "@testing-library/user-event"
import styles from "./Notes.module.scss"

export default function Notes({post, user, blog, newPostElement, setNewPostElement}){
    const deleteComment = async (id) => {
        const response = await fetch(`/api/comments/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setNewPostElement(!newPostElement)
    }

    return(
        <ul>
            {post.notes.map((note)=>{
                return(
                <li key={note._id}>{note.text}
                {note.createdBy === blog._id ? <button onClick={()=>deleteComment(note._id)}>Delete</button>: ""}</li>
                ) 
            })}
        </ul>
    )
}