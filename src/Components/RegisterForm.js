import React, { useState } from 'react';

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
      <Card
        className="login"
        border="secondary"
        body
        style={{ width: '30rem' }}
      >
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
