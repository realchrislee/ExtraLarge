import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {

  window.login = SessionApiUtil.login;
  window.signup = SessionApiUtil.signup;
  window.logout = SessionApiUtil.logout;
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to ExtraLarge!</h1>, root);
});
