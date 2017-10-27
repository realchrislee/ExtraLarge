import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login({user: {username: 'guest', password: 'guestpass'}});
  }

  handleDropdown(e) {
    e.preventDefault();
      $('#user-dropdown').removeClass('hidden');
    $('#user-dropdown-button').off('click', this.handleDropdown);
    $(document).on('click', this.hideDropdown);
  }

  hideDropdown() {
    $('#user-dropdown').addClass('hidden');
    $('#user-dropdown-button').on('click', this.handleDropdown);
    $(document).off('click', this.hideDropdown);
  }

  render() {
    if(!this.props.currentUser) {
      return (
        <div className='greeting-buttons'>
          <Link className='signin-button' to="/login">Sign in</Link>
          <br></br>
          <Link className='signup-button' to="/signup">Get started</Link>
          <br/>
          <button onClick={this.handleGuestLogin} className='demo-button' >Demo Login</button>
        </div>
      );
    } else {
      return (
        <div className='user-avatar'>
          <button id='user-dropdown-button' onClick={this.handleDropdown} className='user-dropdown-button'>
            <img className='default-avatar'></img>
          </button>
            <div id='user-dropdown' className='user-dropdown hidden'>
              <ul>
                <li>
                  <button onClick={ () => this.props.logout() }>Sign out</button>
                </li>
              </ul>
            </div>
            <div className='arrow-up'></div>
        </div>
      );
    }
  }
}

export default Greeting;
