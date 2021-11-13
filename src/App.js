import React from 'react';
import {withAuth0} from '@auth0/auth0-react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import LoginButtonAuth0 from './LoginButtonAuth0';
import LogoutButtonAuth0 from './LogoutButtonAuth0';
import Profile from './Profile';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: null,
    }
  }

  loginHandler = (user, email) => {
    this.setState({
      user, email
    })
  }

  logoutHandler = () => {
    this.setState({
      email: null,
      user: null,
    })
  }

  render() {
    return (
      <>
        {this.props.auth0.isAuthenticated && <p>hi</p>}
        <Container id="body-container" style={{display: "flex", flexDirection: "column", alignItems: "stretch", height: "100vh"}} fluid>
          <Router>
            <Header showModal={this.showModal} user={this.state.user} onLogout={this.logoutHandler} />
            <Switch id="background">
              <Route exact path="/">
                {this.props.auth0.isAuthenticated ? <><p>it rendered finally</p><BestBooks /></> : <><LoginButtonAuth0 /><LogoutButtonAuth0 /></>}
              </Route>
              <Route exact path="/profile">
                {this.props.auth0.isAuthenticated && <Profile />}
              </Route>
            </Switch>
            <Footer />
          </Router>
        </Container>
      </>
    )
  }
}

export default withAuth0(App);
