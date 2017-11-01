import React from 'react';
import { connect } from 'react-redux';
import MyShow from './my_show';
import { fetchStories, deleteStory, updateStory } from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => {
  let stories = [];
  if (state.session.currentUser) {
    stories = Object.values(state.entities.stories).filter(story => story.author_id === state.session.currentUser.id);
  }
  return {
    stories,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchStories: () => dispatch(fetchStories()),
    deleteStory: storyId => dispatch(deleteStory(storyId)),
    updateStory: story => dispatch(updateStory(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyShow);
