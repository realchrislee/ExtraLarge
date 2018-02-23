import React from 'react';
import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { fetchComment, createComment, updateComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, props) => {
  return {
    comment: null,
    currentUser: state.session.currentUser,
    errors: state.errors.comment,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createComment: comment => dispatch(createComment(comment)),
    clearErrors: errors => dispatch(clearErrors(errors))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm));
