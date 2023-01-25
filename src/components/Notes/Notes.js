export default function Notes({post}){
    
    return(
        <ul>
            {post.notes.map((note)=>{
               return(
                <li>{note}</li>
               ) 
            })}
        </ul>
    )
}