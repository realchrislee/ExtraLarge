import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const StoryIndexItem = ({ story, router, deleteStory, history }) => {
  return (
    <div className='story-index-div'>
      <div className='story-left-div'>

      </div>
      <div className='story-right-div'>
          <Link className='link' to={`/api/stories/${story.id}`}>
            {story.title}
          </Link>
      </div>
    </div>
  );
};

export default withRouter(StoryIndexItem);
