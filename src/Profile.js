import {Component} from "react";
import {withAuth0} from '@auth0/auth0-react';

class Profile extends Component {

  render() {
    return (
      <>
        <img id="user-picture" alt='user picture' src={this.props.auth0.user.picture} />
        <ul>
          <li>Username: {this.props.auth0.user.name}</li>
          <li>Email: {this.props.auth0.user.email}</li>
        </ul>
      </>
    )

  }
};

export default withAuth0(Profile);
