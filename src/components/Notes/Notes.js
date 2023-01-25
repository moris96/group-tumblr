export default function Notes({post}){
    
    return(
        <ul>
            {post.notes.map((note)=>{
               return(
                <li key={note._id}>{note.text}</li>
               ) 
            })}
        </ul>
    )
}