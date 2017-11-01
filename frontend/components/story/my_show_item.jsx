import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MyShowItem = ({ story, router, deleteStory, updateStory, history }) => {
  return (
    <div className='p-title'>
      <Link to={`api/stories/${story.id}`}>
        <h3>{story.title}</h3>
      </Link>
      <Link className='p-desc' to={`api/stories/${story.id}`}>{story.body.slice(2,60)}...</Link>
      <div className='p-date'>
        Published on {story.month} - {story.day}
      </div>
    </div>
  )
}

export default withRouter(MyShowItem);
