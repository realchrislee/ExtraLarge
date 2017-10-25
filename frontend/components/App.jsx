import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
  <div className='main-div'>
    <header className='main-header'>
      <h1>ExtraLarge</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SigninContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);

export default App;
