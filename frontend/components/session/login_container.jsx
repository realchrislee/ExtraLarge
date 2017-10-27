import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.errors.session,
    formType: 'login',
    navLink: <div>
                Are you new to ExtraLarge?  <Link to='/signup' className='link'>Sign up</Link>
             </div>,
    greeting: <h1 className='session-greeting'>Welcome Back.</h1>,
    greeting2: <h2 className='session-greeting2'>Log in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.</h2>,
    buttonText: 'Continue',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: errors => dispatch(clearErrors(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
