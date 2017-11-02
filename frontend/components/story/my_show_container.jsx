import React from 'react';
import { connect } from 'react-redux';
import MyShow from './my_show';
import { fetchStories, deleteStory, updateStory } from '../../actions/story_actions';
import { withRouter } from 'react-router-dom';

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
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MyShow));
