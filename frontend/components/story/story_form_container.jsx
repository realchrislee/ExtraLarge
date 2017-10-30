import React from 'react';
import { connect } from 'react-redux';
import StoryForm from './story_form';
import { fetchStory, createStory, updateStory } from '../../actions/story_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let story = { title: 'Title', body: 'Tell your story...' };
  let formType = 'new';
  if (ownProps.match.path == '/api/stories/:id/edit') {
    story = state.entities.stories[ownProps.match.params.id];
    formType = 'edit';
  }
  return {
    story,
    formType,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === '/new-story' ? createStory : updateStory;
  return {
    fetchStory: id => dispatch(fetchStory(id)),
    action: story => dispatch(action(story))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm));
