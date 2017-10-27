import React from 'react';
import { connect } from 'react-redux';
import MainIndex from './main_index';
import StoryIndex from '../story/story_index';

const mapStateToProps = (state, ownProps) => {
  return {
    stories: Object.values(state.entities.stories),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchStories: () => dispatch(fetchStories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex);
