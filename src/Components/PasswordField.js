import React from 'react';
import Form from 'react-bootstrap/Form';

const EmailField = ({ value, onChange, label }) => (
  <Form.Group controlId="formBasicPassword">
    <Form.Label>{label || 'Password'}</Form.Label>
    <Form.Control
      type="password"
      autoComplete="current-password"
      placeholder="Password"
      value={value}
      onChange={onChange}
    />
  </Form.Group>
);

export default EmailField;
