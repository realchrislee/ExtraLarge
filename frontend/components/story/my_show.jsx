import React from 'react';
import MyShowItem from './my_show_item';
import { Link, Redirect } from 'react-router-dom';

class MyShow extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    if(!this.props.currentUser) return <Redirect to='/' />;
    const stories = this.props.stories.map((story, i) => {
      return (
        <MyShowItem
          key={story.id}
          story={story}
          deleteStory={this.props.deleteStory}
          updateStory={this.props.updateStory}
          />
      );
    });
    return (
      <div className='p-container'>
        <div className='p-header'>
          <h4>Your stories</h4>
          <div className='n-s-button'>
            <Link to='/new-story'>Write a story</Link>
          </div>
        </div>
        <div>
          <div>
            {stories}
          </div>
        </div>
      </div>
    );
  }
}

export default MyShow;
