import React from 'react';
import Form from 'react-bootstrap/Form';

const EmailField = ({ value, onChange }) => (
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control
      type="email"
      placeholder="Enter email"
      autoComplete="username"
      value={value}
      onChange={onChange}
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
);

export default EmailField;
