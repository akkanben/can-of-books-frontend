import {Component} from "react";
import {withAuth0} from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Profile extends Component {

  render() {
    return (
      <>
        <Card>
          <Card.Img id="user-picture" alt='user' src={this.props.auth0.user.picture} />
          <Card.Body>
            <ListGroup>
              <ListGroupItem>Username: {this.props.auth0.user.name}</ListGroupItem>
              <ListGroupItem>Email: {this.props.auth0.user.email}</ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </>
    )

  }
};

export default withAuth0(Profile);
