import React from 'react';
import StoryIndexItem from './story_index_item';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';


class StoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const stories = this.props.stories.map((story, i) => {
      return (
        <StoryIndexItem
          key={story.id}
          story={story}
          deleteStory={this.props.deleteStory}
          />
      );
    });
      if (!this.props.currentUser) {
        return (
          <div>
            <div className='main-header'>
              <a className="about" href="#">About membership</a>
              <div className='nav-div'>
                <Link to='/'>ExtraLarge</Link>
              </div>
              <div className='greeting-div'>
                <GreetingContainer />
              </div>
            </div>
            <div className='landing-container'>
              <div className='landing-div'>
                <div className='landing-left-div'>
                  <div className='landing-header-div'>
                    Interesting ideas that set your mind in motion.
                  </div>
                  <div className='landing-words-div'>
                    Hear directly from the people who know it best. From tech to politics to creativity and more - whatever your interest, we've got you covered.
                  </div>
                  <div className='landing-buttons-div'>
                    <Link className='landing-signup-button' to='/signup'>Get started</Link>
                    <Link className='landing-learn-more' to='/about'>Learn more</Link>
                  </div>
                </div>
                <div className='landing-right-div'>

                </div>
              </div>
              <div>
                <ul className='story-index-list'>
                  {stories}
                </ul>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className='main-header'>
              <a className="about" href="#">About membership</a>
              <div className='nav-div'>
                <Link to='/'>ExtraLarge</Link>
              </div>
              <div className='greeting-div'>
                <GreetingContainer />
              </div>
            </div>
            <div className='story-index-list'>
              {stories}
            </div>
          </div>
        );
      }
  }
}

export default StoryIndex;
