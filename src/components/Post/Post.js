export default function Post({post, user}){
    return(
        <div className="post">
            <h1>{post.title}</h1>
            <h3>{post.text}</h3>
            <button>Add Note</button>
            <button>Share</button>
            <button>Like</button>
            {user == post.creator ? 
            <>
            <button>Delete</button>
            <button>Edit</button> 
            </>: ""}
        </div>
    )
}