import React from 'react';
import LoginButton from './LoginButton';
import Card from 'react-bootstrap/Card';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Text>
            Welcome to Can of Books, please login to get started.
          </Card.Text>
          <LoginButton />

        </Card.Body>
      </Card>
    )
  }
}

export default Login;
