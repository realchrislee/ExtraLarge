import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as ApiUtil from './util/story_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchStories = ApiUtil.fetchStories;
  window.fetchStory = ApiUtil.fetchStory;
  window.createStory = ApiUtil.createStory;
  window.updateStory = ApiUtil.updateStory;
  window.deleteStory = ApiUtil.deleteStory;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
