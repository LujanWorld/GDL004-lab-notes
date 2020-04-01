import React, { Component } from 'react';
import fire, { provider, auth } from '../firebaseConfig';

export default class SignUpForm extends Component {
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
    console.log(this.state);
    event.preventDefault();
    let { email, password } = this.state;

    //   if (email === 'lujan@lujan.com' && password === 'lujan') {
    //     // Todo: Navigate to notes.
    //     this.props.history.push('/My-notes');
    //   } else {
    //     // Todo: Show error.
    //   }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  onSignUp = () => {
    const { email, password } = this.state;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push('/My-notes');
      })
      .catch(error => {
        console.log(error);
        alert('Try again');
      });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="🔒Enter password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <label> Repeat Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="🔒Enter password"
                name="repeatpassword"
                value={this.state.repeatpassword}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Repeat password"
              />
            </div>

            <button
              className="btn btn-primary btn-block"
              type="signup"
              value="SignUp"
              className="btn btn-primary btn-block"
              onClick={this.onSignUp}
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
