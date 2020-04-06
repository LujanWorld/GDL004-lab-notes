import React, { createRef } from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LoginForm(props) {
  const emailEl = createRef();
  const passwordEl = createRef();
  const rememberEl = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = emailEl.current.value;
    let password = passwordEl.current.value;
    let rememberMe = rememberEl.current.value === 'on';

    if (email === '' || password === '') {
      return;
    }

    props.onLogin(email, password, rememberMe);
  };

  return (
    <center>
      <Card body style={{ width: '40rem' }}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              autoComplete="username"
              ref={emailEl}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              ref={passwordEl}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" ref={rememberEl} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Card>
    </center>
  );
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
