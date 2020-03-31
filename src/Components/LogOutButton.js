import React, { Component } from 'react';
import firebase from 'firebase/app';
import { withRouter } from 'react-router-dom';

class LogOut extends Component {
  onLogoutClicked = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('log out has been successful');
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <center>
        <button
          color="info"
          onClick={() => {
            this.onLogoutClicked();
          }}
        >
          Log Out
        </button>
      </center>
    );
  }
}

export default withRouter(LogOut);
