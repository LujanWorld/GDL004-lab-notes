// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

// import firebase from '../firebaseConfig';
// import App from './Components/App';

// test('allows the user to login successfully', async () => {
//   const fakeUserResponse = { token: 'fake_user_token' };
//   jest.spyOn(firebase, 'auth').mockImplementationOnce(() => {
//     return Promise.resolve({
//       json: () => Promise.resolve(fakeUserResponse),
//     });
//   });
//   const { onLogin } = render(<Login />);
//   expect(firebase.fireEvent.getItem('token')).toEqual(fakeUserResponse.token);
// });
