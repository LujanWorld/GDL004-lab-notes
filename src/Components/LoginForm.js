import React, { useState, createRef } from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import EmailField from './EmailField';

export default function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [google, setGoogle] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === '' || password === '') {
      return;
    }

    props.onLogin(email, password, rememberMe);
  };

  const handleRememberMe = (event) => {
    var checked = event.target.checked === 'on';
    setRememberMe(checked);
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleGoogle = (event) => {
    event.preventDefault();
    props.onGoogleLogin();
  };
  // JS LAND

  // REACT LAND
  return (
    <center>
      <Card border="secondary" body style={{ width: '30rem' }}>
        <Form>
          <EmailField value={email} onChange={emailChange} />

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              onChange={passwordChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onChange={handleRememberMe}
              label="Remember me"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <br></br>
          <br></br>
          {props.onGoogleLogin && (
            <Button variant="primary" type="submit" onClick={handleGoogle}>
              Login Google
            </Button>
          )}
        </Form>
      </Card>
    </center>
  );
  // REACT LAND
}

//   onGoogleSignInClicked = () => {
//     fire
//       .auth()
//       .signInWithPopup(provider)
//       .then(() => {
//         this.props.history.push('/My-notes');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <form>
//             <h3>Sign In</h3>
//             <div className="form-group">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.handleInputChange}
//                 className="form-control"
//                 placeholder="Enter email"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.handleInputChange}
//                 className="form-control"
//                 placeholder="Enter password"
//               />
//             </div>
//             <button
//               type="submit"
//               value="Submit"
//               className="btn btn-primary btn-block"
//               onClick={this.OnSignInWitnEmailAndPass}
//             >
//               Submit
//             </button>
//             <center>
//               <img
//                 src={google}
//                 alt="Logo google"
//                 onClick={this.onGoogleSignInClicked}
//               />
//             </center>
//           </form>
//         </div>
//       </div>

// function googleLogin(email, password, rememberMe) {
//   const persistance = rememberMe
//     ? fire.persistanceLocal
//     : fire.persistanceSession;

//   fire.auth
//     .setPersistence(persistance)
//     .then(() => {
//       fire.auth
//       .signInWithPopup(provider)
//         .then(() => {
//           console.log('Register successful!');
//           history.push('/');
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     })
