import React from 'react';
import Form from 'react-bootstrap/Form';

const EmailField = ({ value, onChange }) => (
  <Form.Group controlId="formBasicEmail">
    <Form.Label htmlFor="email">Email address</Form.Label>
    <Form.Control
      data-testid="email-input"
      id="email"
      type="email"
      placeholder="Enter email"
      autoComplete="username"
      value={value}
      onChange={onChange}
      minLength="8"
      required
    />
    <Form.Control.Feedback type="invalid">
      Please enter a valid email address
    </Form.Control.Feedback>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
);

export default EmailField;
