import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Greeting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.currentUser) {
      return (
        <div>
          <Link to="/#/signup">Sign Up</Link>
          <br></br>
          <Link to="/#/login">Log In</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Welcome { this.props.currentUser.username }!</h3>
          <button onClick={ () => this.props.logout() }>Logout</button>
        </div>
      );
    }
  }
}

export default Greeting;
