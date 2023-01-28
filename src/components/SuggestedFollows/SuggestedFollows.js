import styles from "../SuggestedFollows/SuggestedFollows.module.scss"
import { useState, useEffect } from 'react'

export default function SuggestedFollows () {
  const [showUsers, setShowUsers] = useState(null)
  const getShowUsers = async () => {
    try {
      const response = await fetch(`/api/users`)
      const data = await response.json()
      setShowUsers(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getShowUsers()
  }, [])


  return (
    <div>
      <h1 className={styles.suggestedContainer}>
        Suggested Follows Component
      </h1>
      {showUsers ? showUsers.map((showUser) => {
        return <p key={showUser.id}>{showUser.username}</p>
      }): "No users to show"}
    </div>
  )
}