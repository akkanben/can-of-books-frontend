import {Component} from 'react'
import LoginForm from './LoginForm';
import Button from 'react-bootstrap/Button';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    this.setState({clicked: true});
  }

  render() {
    return (
      <>
        {this.state.clicked ? <LoginForm loginHandler={this.props.loginHandler} /> : <Button onClick={this.handleClick}>Login</Button>}
      </>
    )
  }
}
