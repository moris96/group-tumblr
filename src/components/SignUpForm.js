import { Component } from 'react'
import { signUp } from '../utilities/users-service'


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
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>First Name: </label>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} /><br/>
                <label>Last Name: </label> 
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} /><br/>
                <label>Email: </label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required /><br/>
                <label>Username: </label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required /><br/>
                <label>Profile Photo: </label>
                <input type="text" name="profilePhoto" value={this.state.profilePhoto} onChange={this.handleChange} /><br/>
                <label>Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required /><br/>
                <label>Confirm: </label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />

               
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}