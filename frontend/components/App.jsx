import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import MainContainer from './main/main_container';
import PersonalContainer from './main/personal_container';
import StoryIndexContainer from './story/story_index_container';
import StoryShowContainer from './story/story_show_container';
import StoryFormContainer from './story/story_form_container';
import MyShowContainer from './story/my_show_container';
import { AuthRoute } from '../util/route_util';
import { Route, Link } from 'react-router-dom';



const App = (props) => (
  <div className='main-div'>
    <div className='main-header'>
      <a className="about" href="#">About membership</a>
      <div className='nav-div'>
        <Link to='/'>ExtraLarge</Link>
      </div>
      <div className='greeting-div'>
        <GreetingContainer />
      </div>
    </div>

    <AuthRoute path="/login" component={ LoginContainer } />
    <AuthRoute path="/signup" component={ SignupContainer } />
    <Route exact path='/' component={ MainContainer } />
    <Route exact path='/api/stories/:id' component={ StoryShowContainer } />
    <Route exact path='/new-story' component={ StoryFormContainer } />
    <Route path='/me/stories' component={ MyShowContainer } />
  </div>
);

export default App;


// <Route exact path='/' component={
//     props.store.getState().session.currentUser ? MainContainer : PersonalContainer
//   } />
