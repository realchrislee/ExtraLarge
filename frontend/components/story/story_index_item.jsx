import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const StoryIndexItem = ({ story, router, updateStory, deleteStory, history }) => {
  const body = () => ({__html: story.body});
  return (
    <div className='story-index-div'>
      <div className='story-left-div'>
        <Link to={`/api/stories/${story.id}`}>
          <img src={story.image_url} />
        </Link>
      </div>
      <div className='story-right-div'>
        <div className='story-right-inner'>
          <Link to={`/api/stories/${story.id}`}>
            {story.title}
          </Link>
          <Link to={`/api/stories/${story.id}`}>
            {story.body.replace(/<[^>]+>/g, ' ').slice(0, 140)}...
          </Link>
        </div>
        <div className='index-user'>
          <div className='index-avatar'>
            <img
              src={story.avatar_url}
              className='index-avatar-img'
              ></img>
          </div>
          <div className='i-author-info'>
            <div className='i-author-name'>
              <h5>{story.author_name}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(StoryIndexItem);
