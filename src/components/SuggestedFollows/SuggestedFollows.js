import styles from "../SuggestedFollows/SuggestedFollows.module.scss"
import { useState, useEffect } from 'react'

export default function SuggestedFollows () {
  const [users, setUsers] = useState(null)
  const getUsers = async () => {
    try {
      const response = await fetch(`/api/users`)
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className={styles.suggestedContainer}>
      <h1 classsName={styles.suggestedTitle}>
        Check out these blogs
      </h1>
      <hr/>
        {users ? users.map((user) => {
          return <p key={user.id}>
            {user.username}
            </p>
        }): "No users to show"}
    </div>
  )
}