import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    if (this.props.errors) {
      this.props.clearErrors(this.props.errors);
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


  // navLink() {
  //   if(this.props.formType === 'login') {
  //     return <Link to='/signup'>Sign up instead</Link>;
  //   } else {
  //     return <Link to='/login'>Sign in instead</Link>;
  //   }
  // }

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
    // const greeting = this.props.formType === 'login' ? 'Welcome Back.' : 'Join ExtraLarge.';
    // const greeting2 = this.props.formType === 'login' ? 'Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.' : 'Create an account to personalize your homepage, follow your favorite authors and publications, applaud stories you love, and more.';
    // const buttonText = this.props.formType === 'login' ? 'Continue' : 'Create Account';
    const nameInput = this.props.formType === 'login' ? '' : <input type='text'
                  className='session-input'
                  value={this.state.name}
                  onChange={this.update('name')}
                  placeholder='Name'
                  />;
    return (
      <div className={`session-form-container ${this.props.className}`}>
        <form onSubmit={this.handleSubmit}>
          <div className='session-greeting-container'>
            {this.props.greeting}
            <br/>
            {this.props.greeting2}
          </div>
          {this.renderErrors()}
          <div className="session-form">
            {nameInput}
            <br/>
            <input
              className='session-input'
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
              placeholder='Username'
              />
            <br/>
            <input
              className='session-input'
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              placeholder='Password'
              />
            <br/>
            <input className='form-submit' type='submit' value={this.props.buttonText} />
            <br/>
            {this.props.navLink}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
