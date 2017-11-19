import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import StoryErrorsReducer from './story_errors_reducer';
import CommentErrorsReducer from './comment_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  story: StoryErrorsReducer,
  comment: CommentErrorsReducer
});

export default ErrorsReducer;
