import * as APIUtil from '../util/story_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';

export const fetchStories = () => dispatch => {
  return APIUtil.fetchStories()
  .then(stories => dispatch(recieveStories(stories)))
  .fail(errors => dispatch(receiveErrors(errors)));
};

export const fetchStory = id => dispatch => {
  return APIUtil.fetchStory(id)
  .then(story => dispatch(receiveStory(story)))
  .fail(errors => dispatch(receiveErrors(errors)));
};

export const createStory = story => dispatch => {
  return APIUtil.createStory(story)
  .then(story => dispatch(receiveStory(story)))
  .fail(errors => dispatch(receiveErrors(errors)));
};

export const updateStory = story => dispatch => {
  return APIUtil.updateStory(story)
  .then(story => dispatch(receiveStory(story)))
  .fail(errors => dispatch(receiveErrors(errors)));
};

export const deleteStory = storyId => dispatch => {
  return APIUtil.deleteStory(storyId)
  .then(story => dispatch(removeStory(storyId)))
  .fail(errors => dispatch(receiveErrors(errors)));
};

const recieveStories = stories => {
  return {
    type: RECEIVE_STORIES,
    stories
  };
};

const receiveStory = story => {
  return {
    type: RECEIVE_STORY,
    story
  };
};

const removeStory = storyId => {
  return {
    type: REMOVE_STORY,
    storyId
  };
};
