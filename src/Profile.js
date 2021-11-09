import { Component } from "react";

class Profile extends Component {

  render() {
    return ( <ul>
      <li>Username: {this.props.user}</li>
      <li>Email: {this.props.email}</li>
    </ul> )
  }
};

export default Profile;
