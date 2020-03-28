import React, { Component } from 'react';
import fire from '../setUp/firebase';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.fire = fire;
  }
  singUpEvent = () => {
    this.fire
      .createUserWithEamilAndPassword(email, password)
      .then(data => {
        this.props.history.push('/sign-in');
      })
      .catch(function(error) {
        console.log(error);
        alert('Hubo un error');
      });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="🔒Enter password"
              />
            </div>

            <button
              className="btn btn-primary btn-block"
              onClick={this.singUpEvent}
            >
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
// Sign up = register your details for the first time

// Sign in = log in, notify someone of your arrival
