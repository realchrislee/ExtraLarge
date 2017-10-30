import { RECEIVE_STORIES, RECEIVE_STORY, REMOVE_STORY } from '../actions/story_actions';
import { merge } from 'lodash/merge';

const StoriesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STORIES:
      return Object.values(action.stories);
    case RECEIVE_STORY:
      return Object.assign({}, state, { [action.story.id]: action.story });
    case REMOVE_STORY:
      let newState = merge({}, state);
      delete newState[action.storyId];
      return newState;
    default:
      return state;
  }
};

export default StoriesReducer;
