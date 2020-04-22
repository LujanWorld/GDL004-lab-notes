import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Login from '../Login';

test('should display input email', () => {
  const { getByText } = render(<Login />);
  const emailInput = getByText('Email address');

  expect(Object.keys(emailInput).length).toBeGreaterThanOrEqual(1);
});

test('should display input password', () => {
  const { getByText } = render(<Login />);
  const passInput = getByText('Password');

  expect(Object.keys(passInput).length).toBeGreaterThanOrEqual(1);
});

test('should change the email input correctly', () => {
  const { getByTestId } = render(<Login />);
  const emailInput = getByTestId('email-input');

  fireEvent.change(emailInput, { target: { value: 'maria@laboratoria.com' } });

  expect(emailInput.value).toBe('maria@laboratoria.com');
});

test('should change the password input correctly', () => {
  const { getByTestId } = render(<Login />);
  const passInput = getByTestId('password-input');

  fireEvent.change(passInput, { target: { value: 'marialujannavarro' } });

  expect(passInput.value).toBe('marialujannavarro');
});

test('should call onLogin when submit', () => {
  const onLogin = jest.fn();
  const { getByTestId } = render(<Login onLogin={onLogin} />);
  const emailInput = getByTestId('email-input');
  const passInput = getByTestId('password-input');
  const submitButton = getByTestId('submit-login');

  fireEvent.change(emailInput, { target: { value: 'maria@laboratoria.com' } });
  fireEvent.change(passInput, { target: { value: 'marialujannavarro' } });
  fireEvent.click(submitButton);

  expect(onLogin).toHaveBeenCalledTimes(1);
  expect(onLogin).toHaveBeenCalledWith(
    'maria@laboratoria.com',
    'marialujannavarro',
    false
  );
});

test('should call onGoogleLogin when submit', () => {
  const onGoogleLogin = jest.fn();
  const { getByTestId } = render(<Login onGoogleLogin={onGoogleLogin} />);

  const submitButton = getByTestId('submit-google');

  fireEvent.click(submitButton);

  expect(onGoogleLogin).toHaveBeenCalledTimes(1);
});
