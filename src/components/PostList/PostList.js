import { useState, useEffect } from 'react'
import Post from '../Post/Post'
import styles from "../PostList/PostList.module.scss"

export default function PostList({user, blog, newPostElement, setNewPostElement}) {
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
    <section className={styles.postListContainer}>
      {/* <div>
        <p className={styles.avatar}></p>
      </div> */}
      <div className={styles.postListSection}>
      {posts ? posts.map((post) => {
        return <Post 
        key={post._id} 
        newPostElement={newPostElement} 
        setNewPostElement={setNewPostElement} 
        post={post} 
        user={user}
        blog={blog} />;
      }): "Nothing here"}
      </div>
    </section>
  );
}
