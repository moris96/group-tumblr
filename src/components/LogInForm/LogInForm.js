import { useState } from 'react'
import * as userService from '../../utilities/users-service'
import styles from "../LogInForm/LogInForm.module.scss"

export default function LoginForm ({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    console.log("handleSubmit");
    evt.preventDefault()
    try {
      console.log("user1");
      const user = await userService.login(credentials)
      console.log("user2");
      console.log("user",user);
      setUser(user)
    } catch (error) {
      console.log("user3",error.message);
      setError(error.message)
    }
  }

  return (
    <div>
      <div className={styles.logInFormContainer}>
        <form 
        autoComplete='off' 
        onSubmit={handleSubmit}
        className={styles.logInFormSection}
        >
          <label>Email: </label>
          <input type='email' name='email' value={credentials.email} onChange={handleChange} required /> 
          &nbsp;
          <label>Password: </label>
          <input type='password' name='password' value={credentials.password} onChange={handleChange} required />
          <div className={styles.buttonContainer}>
            <button type='submit'>LOG IN</button>
          </div>
        </form>
      </div>
      <h1 className='error-message'>&nbsp;{error}</h1>
    </div>
  )
}