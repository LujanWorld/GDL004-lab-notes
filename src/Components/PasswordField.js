import React from 'react';
import Form from 'react-bootstrap/Form';

const EmailField = ({ value, onChange, label }) => (
  <Form.Group>
    <Form.Label>{label || 'Password'}</Form.Label>
    <Form.Control
      data-testid="password-input"
      type="password"
      autoComplete="current-password"
      placeholder="🔒Enter Password"
      value={value}
      onChange={onChange}
      required
    />
    <Form.Control.Feedback type="invalid">
      Please choose a Password.
    </Form.Control.Feedback>
  </Form.Group>
);

export default EmailField;
