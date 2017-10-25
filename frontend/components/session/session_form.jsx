import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    debugger
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn) {
      this.props.history.push('/');
    }
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

  navLink() {
    if(this.props.formType === 'login') {
      return <Link to='/signup'>sign up instead</Link>;
    } else {
      return <Link to='/login'>log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const greeting = this.props.formType === 'login' ? 'Welcome Back.' : 'Join ExtraLarge.';
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome to ExtraLarge!
          <br/>
          {greeting}
          {this.renderErrors()}
          <div>
            <br/>
            <label>Email
              <input
                type='text'
                value={this.state.email}
                onChange={this.update('email')}
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
            <input type='submit' value='Continue' /> {this.navLink()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
