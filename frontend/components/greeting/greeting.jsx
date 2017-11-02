import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login({user: {username: 'guest', password: 'guestpass'}});
  }

  toggleDropdown() {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleDropdown() {
    let root = document.getElementById('root');

    if (!this.state.isOpen) {
      root.addEventListener('click', this.handleOutsideClick, false);
    } else {
      root.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.toggleDropdown();
  }

  handleOutsideClick(e) {
    // if(this.node.contains(e.target)) {
    //   return;
    // }

    this.handleDropdown();
  }

  handleLogout(e) {
    e.preventDefault();
    if(this.props.currentUser) {
      this.props.history.push('/');
      this.props.logout();
    }
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
            <img src={this.props.currentUser.avatar_url} className='user-avatar-img'></img>
          </button>
          <div id='user-dropdown' ref={node => { this.node = node; }} className={this.state.isOpen ? 'user-dropdown' : 'hidden'}>
            <ul>
              <li>
                <Link to='/new-story' className='dd-link'>New story</Link>
              </li>
              <li>
                <Link to='/me/stories' className='dd-link'>Stories</Link>
              </li>
              <li>
                <button className='dd-link' onClick={this.handleLogout}>Sign out</button>
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
