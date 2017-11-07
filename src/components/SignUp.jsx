import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase'

class SignUp extends Component {
  constructor (props){
    super(props);
    this.state = {
      email:'',
      password:'',
      error: {
        message: ''
      }
    }

  }

  signUp(){
    console.log('this.state', this.state);
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => {
        this.setState({error})
      }
    )
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <form className="form-inline">
          <input type="text"
            className="form-control" style={{marginRight: '5px'}}
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input type="password"
            className="form-control" style={{marginRight: '5px'}}
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button type="button"
            className="btn btn-primary"
            onClick={() => this.signUp()}
          >Sign Up</button>

        </form>
        <div style={{margin: '5px'}}>{this.state.error.message}</div>
        <div style={{margin: '5px'}}>
          <Link to={'/login'}>Already a Member? Log In Here</Link>
        </div>


      </div>
    )
  }
}

export default SignUp;
