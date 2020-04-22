import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../index.css';

import EmailField from '../EmailField';

import Google from '../Google.jpeg';

export default function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
    }
    setValidated(true);

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

  return (
    <center>
      <Card className="login" body style={{ width: '25rem' }}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <EmailField value={email} onChange={emailChange} />

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              autoComplete="current-password"
              placeholder=" 🔒Enter Password"
              onChange={passwordChange}
              minLength="6"
              maxLength="8"
              data-testid="password-input"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              onChange={handleRememberMe}
              label="Remember me"
            />
          </Form.Group>
          <Button
            data-testid="submit-login"
            className="button"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
          {/* <br></br>
          <br></br> */}
          {props.onGoogleLogin && (
            <img
              data-testid="submit-google"
              className="box"
              src={Google}
              alt="Logo"
              onClick={handleGoogle}
            />
          )}
        </Form>
      </Card>
    </center>
  );
}
