import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';

import EmailField from './EmailField';

export default function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

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

  return (
    <center>
      <Card
        className="login"
        border="secondary"
        body
        style={{ width: '30rem' }}
      >
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
}
