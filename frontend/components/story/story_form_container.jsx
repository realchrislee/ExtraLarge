import React from 'react';
import { connect } from 'react-redux';
import StoryForm from './story_form';
import { fetchStory, createStory, updateStory } from '../../actions/story_actions';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let story = null;
  let formType = 'new';
  if (ownProps.match.path == '/api/stories/:id/edit') {
    story = state.entities.stories[ownProps.match.params.id];
    formType = 'edit';
  }
  return {
    story,
    formType,
    currentUser: state.session.currentUser,
    errors: state.errors.story,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === '/new-story' ? createStory : updateStory;
  return {
    fetchStory: id => dispatch(fetchStory(id)),
    action: (story, id) => dispatch(action(story, id)),
    clearErrors: errors => dispatch(clearErrors(errors))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm));
