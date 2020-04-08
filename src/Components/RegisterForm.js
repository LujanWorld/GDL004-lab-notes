import React, { useState, createRef } from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import EmailField from './EmailField';
import PasswordField from './PasswordField';

export default function RegisterForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleSubmitRe = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      return;
    }

    if (password !== passwordRepeat) {
      return;
    }

    props.onRegister(email, password);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const passwordRepeatChange = (e) => {
    setPasswordRepeat(e.target.value);
  };

  return (
    <center>
      <Card border="secondary" body style={{ width: '30rem' }}>
        <Form>
          <EmailField id="email" value={email} onChange={emailChange} />
          <PasswordField
            id="password"
            value={password}
            onChange={passwordChange}
          />
          <PasswordField
            value={passwordRepeat}
            onChange={passwordRepeatChange}
            label="Repeat Password"
            id="passwordRepeat"
          />
          <Button variant="primary" type="submit" onClick={handleSubmitRe}>
            Submit
          </Button>
        </Form>
      </Card>
    </center>
  );
}

// import fire, { provider, auth } from '../firebaseConfig';

// export default class SignUpForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: ''
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit(event) {
//     console.log(this.state);
//     event.preventDefault();
//     let { email, password } = this.state;
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }
//   onSignUp = () => {
//     const { email, password } = this.state;
//     fire
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(() => {
//         this.props.history.push('/My-notes');
//       })
//       .catch(error => {
//         console.log(error);
//         alert('Try again');
//       });
//   };

//   render() {
//     return (
//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <div>
//             <h3>Sign Up</h3>

//             <div className="form-group">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.handleInputChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="🔒Enter password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.handleInputChange}
//                 className="form-control"
//                 placeholder="Enter password"
//               />
//             </div>
//             <div className="form-group">
//               <label> Repeat Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="🔒Enter password"
//                 name="repeatpassword"
//                 value={this.state.repeatpassword}
//                 onChange={this.handleInputChange}
//                 className="form-control"
//                 placeholder="Repeat password"
//               />
//             </div>

//             <button
//               className="btn btn-primary btn-block"
//               type="signup"
//               value="SignUp"
//               className="btn btn-primary btn-block"
//               onClick={this.onSignUp}
//             >
//               Sign Up
//             </button>
//             <p className="forgot-password text-right">
//               Already registered <a href="#">sign in?</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
