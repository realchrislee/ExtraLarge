import React from 'react';
import { connect } from 'react-redux';
import StoryIndex from './story_index';
import { fetchStories, deleteStory } from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    stories: Object.values(state.entities.stories),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchStories: () => dispatch(fetchStories()),
    deleteStory: storyId => dispatch(deleteStory(storyId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex);
