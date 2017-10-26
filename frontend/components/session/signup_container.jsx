import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.errors.session,
    formType: 'signup',
    navLink: <div>
               Already have an account?  <Link to='/login' className='link'>Log in</Link>
           </div>,
    greeting: <h1 className='session-greeting'>Join ExtraLarge.</h1>,
    greeting2: <h2>'Create an account to personalize your homepage, follow your favorite authors and publications, applaud stories you love, and more.'</h2>,
    buttonText: 'Create Account',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: errors => dispatch(clearErrors(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
