import React, { Component } from 'react';

import fire, { provider, auth } from '../firebaseConfig';
import google from '../img/google.jpeg';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log(this.props);
    event.preventDefault();
    let { email, password } = this.state;

    // if (email === 'lujan@lujan.com' && password === 'lujan') {
    //   // Todo: Navigate to notes.
    //   this.props.history.push('/My-notes');
    // } else {
    //   // Todo: Show error.
    // }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  OnSignInWitnEmailAndPass = e => {
    e.preventDefault();
    const { email, password } = this.state;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push('/My-notes');
      })
      .catch(error => {
        console.log(error);
      });
  };

  onGoogleSignInClicked = () => {
    fire
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        this.props.history.push('/My-notes');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              value="Submit"
              className="btn btn-primary btn-block"
              onClick={this.OnSignInWitnEmailAndPass}
            >
              Submit
            </button>
            <center>
              <img
                src={google}
                alt="Logo google"
                onClick={this.onGoogleSignInClicked}
              />
            </center>
          </form>
        </div>
      </div>
    );
  }
}
