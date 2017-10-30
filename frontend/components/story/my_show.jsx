import React from 'react';
import MyShowItem from './my_show_item';
import { Link } from 'react-router-dom';

class MyShow extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
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
      <div>
        <h3>Your stories</h3>
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
