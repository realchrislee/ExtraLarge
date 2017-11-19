import * as APIUtil from '../util/comment_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const fetchComments = () => dispatch => {
  return APIUtil.fetchComments()
  .then(comments => dispatch(recieveComments(comments)))
  .fail(errors => dispatch(receiveErrors(errors)));
};

export const fetchComment = id => dispatch => {
  return APIUtil.fetchComment(id)
  .then(comment => dispatch(receiveComment(comment)))
  .fail(errors => dispatch(receiveErrors(errors)));
};

export const createComment = comment => dispatch => {
  return APIUtil.createComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
  .fail(errors => dispatch(receiveErrors(errors)));
};

export const updateComment = comment => dispatch => {
  return APIUtil.updateComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
  .fail(errors => dispatch(receiveErrors(errors)));
};

export const deleteComment = commentId => dispatch => {
  return APIUtil.deleteComment(commentId)
  .then(comment => dispatch(removeComment(commentId)))
  .fail(errors => dispatch(receiveErrors(errors)));
};

const recieveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};
