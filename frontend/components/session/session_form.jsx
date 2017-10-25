import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  render() {
    const greeting = this.props.formType === 'login' ? 'Welcome Back.' : 'Join ExtraLarge.';
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome to ExtraLarge!
          <br/>
          {greeting}
          <div>
            <br/>
            <label>Email
              <input
                type='text'
                value={this.state.username}
                onChange={this.update('username')}
                />
            </label>
            <br/>
            <label>Password
              <input
                type='password'
                value={this.state.password}
                onChange={this.update('password')}
                />
            </label>
            <br/>
            <input type='submit' value='Continue' />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
