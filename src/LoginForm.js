import {Component} from "react";
import { Form } from "react-bootstrap";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
    }
  }

  handleClick = () => {
    this.props.loginHandler(this.state.user, this.state.email);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({user: e.target.value})

  }

  handleEmailChange = (e) => {
    e.preventDefault();
    this.setState({email: e.target.value})

  }

  render() {
    return (
      <Form>
        <Form.Control type='text' onChange={this.handleEmailChange} placeholder="enter email" required/>
        <Form.Control type='text' onChange={this.handleChange} placeholder="enter username" required/>
        <button onClick={this.handleClick}>Submit</button>
      </Form>
    );
  }
};

export default LoginForm;
