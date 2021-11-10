import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Profile from './Profile';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
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
        <Router>
          <Header showModal={this.showModal} user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.user ? <BestBooks /> : <Login loginHandler={this.loginHandler} />}
            </Route>
            <Route exact path="/profile">
              {this.state.user ? <Profile email={this.state.email} user={this.state.user} /> : <Login loginHandler={this.loginHandler} />}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
