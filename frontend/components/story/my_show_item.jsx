import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MyShowItem = ({ story, router, history }) => {
  console.log(story.body);
  return (
    <div className='p-title'>
      <Link to={`/api/stories/${story.id}`}>
        <h3>{story.title}</h3>
      </Link>
      <Link className='p-desc' to={`/api/stories/${story.id}`}>{story.body.replace(/<[^>]+>/g, ' ').slice(0, 140)}...</Link>
      <div className='p-date'>
        Published on {story.month} - {story.day}
      </div>
    </div>
  )
}

export default withRouter(MyShowItem);
