import Post from "./Post";

export default function PostList({ posts, user }){
    return(
        <div className="post-list">
            {posts.map((post)=>{
                return(
                    <Post 
                    post={post}
                    user={user}/>
                )
            })}
        </div>
    )
}