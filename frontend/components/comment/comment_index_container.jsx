import React from 'react';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, deleteComment, updateComment } from '../../actions/comment_actions';

const mapStateToProps = (state, props) => {
  return {
    comments: Object.values(state.entities.comments).filter(comment => parseInt(comment.story_id) === parseInt(props.match.params.id)),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchComments: () => dispatch(fetchComments()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
