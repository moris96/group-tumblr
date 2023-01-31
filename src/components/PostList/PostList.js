import Post from '../Post/Post'
import { useState, useEffect } from 'react'

export default function PostList({user, newPostElement, setNewPostElement, blog}) {
    const [posts, setPosts] = useState(null)
    const getPosts = async () => {
        try {
            const response = await fetch(`/api/posts`)
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(()=>{
        getPosts()
    },[newPostElement])

  return (
    <div className="post-list">
      <h1>Post List</h1>
      {posts ? posts.map((post) => {
        return <Post key={post._id} newPostElement={newPostElement} setNewPostElement={setNewPostElement} post={post} user={user} blog={blog}/>;
      }): "Nothing here"}
    </div>
  );
}
