import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>ExtraLarge!</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
