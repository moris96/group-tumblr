import { Component } from 'react'
import { signUp } from '../../utilities/users-service'
import styles from "../SignUpForm/SignUpForm.module.scss"


export default class SignUpForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '', //required
        email: '', //required
        password: '', //required
        confirm: '',
        profilePhoto: '',
        error: ''
    }

    handleSubmit = async (evt) => {
      evt.preventDefault()
      try {
        const formData = { ...this.state }
        delete formData.error
        delete formData.confirm
        const user = await signUp(formData)
        this.props.setUser(user)
      } catch (error) {
        console.log(error);
        this.setState({ error: 'Sign Up Failed' })
      }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className={styles.signUpFormContainer}>
              <form 
              autoComplete="off" 
              onSubmit={this.handleSubmit}
              >
                <section className={styles.signUpSection}>
                <label>First Name: </label>
                  <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} /><br/>
                <label>Last Name: </label> 
                  <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} /><br/>
                <label>Email: <span className={styles.required}>*</span></label>
                  <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required /><br/>
                <label >Username: <span className={styles.required}>*</span></label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required /><br/>
                <label>Profile Photo: </label>
                <input type="text" name="profilePhoto" value={this.state.profilePhoto} onChange={this.handleChange} /><br/>
                <label>Password: <span className={styles.required}>*</span></label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required /><br/>
                <label>Confirm: <span className={styles.required}>*</span></label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                </section>
                <div className={styles.btnSection}>
                  <button 
                  type="submit" 
                  className={styles.signUpBtn}
                  disabled={disable}
                  >SIGN UP
                  &nbsp;
                  <img src={process.env.PUBLIC_URL+"/iconsImg/right-arrow.png"} alt="right-arrow" className={styles.rightArrow} />
                  </button>
                </div>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}