import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.errors.session,
    formType: (ownProps.location.pathname === '/login') ? 'login' : 'signup'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname;
  const processForm = (formType === '/login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: errors => dispatch(clearErrors(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
