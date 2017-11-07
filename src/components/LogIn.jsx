import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase'

class LogIn extends Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',
      error: {
        message: ''
      }
    }
  }

  logIn(){
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch (
      error => {
        this.setState({error})
      }
    )
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Log In</h2>
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
            onClick={() => this.logIn()}>
            Log In
          </button>
        </form>
        <div style={{margin: '5px'}}>
          {this.state.error.message}
        </div>
        <div style={{margin: '5px'}}>
          <Link to={'/signup'}>Not a member yet? Sign Up Here</Link>
        </div>
      </div>
    )
  }
}

export default LogIn;
