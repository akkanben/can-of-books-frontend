import {Component} from "react";

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

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <>
        <p>LoginForm Coming Soon</p>
        <>
          <input type='text' onChange={this.handleChange} placeholder="enter username" />
          <input type='text' onChange={this.handleChange} placeholder="enter email" />
          <button onClick={this.handleClick}>Submit</button>
        </>
      </>
    );
  }
};

export default LoginForm;
