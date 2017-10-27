import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const StoryIndexItem = ({ story, router, deleteStory, history }) => {
  return (
    <li className='story-index-item'>
      <Link className='link' to={`/api/stories/${story.id}`}>
        {story.title}
      </Link>
    </li>
  );
};

export default withRouter(StoryIndexItem);
