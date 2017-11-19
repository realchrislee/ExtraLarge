import { combineReducers } from 'redux';
import StoriesReducer from './story_reducer';
import CommentsReducer from './comment_reducer';

export default combineReducers({
  stories: StoriesReducer,
  comments: CommentsReducer
});
