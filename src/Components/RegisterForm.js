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
  const [validated, setValidated] = useState(false);
  const handleSubmitRe = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      e.stopPropagation();
    }
    setValidated(true);

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
        <Form noValidate validated={validated} onSubmit={handleSubmitRe}>
          <EmailField id="email" value={email} onChange={emailChange} />
          <PasswordField
            id="password"
            value={password}
            onChange={passwordChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a Password.
          </Form.Control.Feedback>
          <PasswordField
            value={passwordRepeat}
            onChange={passwordRepeatChange}
            label="Repeat Password"
            id="passwordRepeat"
            minlength="8"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a Password.
          </Form.Control.Feedback>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </center>
  );
}
