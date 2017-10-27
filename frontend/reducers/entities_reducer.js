import { combineReducers } from 'redux';
import StoriesReducer from './stories_reducer';

export default combineReducers({
  stories: StoriesReducer,
});
