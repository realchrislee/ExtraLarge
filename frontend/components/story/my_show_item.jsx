import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MyShowItem = ({ story, router, deleteStory, updateStory, history }) => {
  return (
    <div>
      <div>
        <h3>{story.title}</h3>
      </div>
    </div>
  )
}

export default withRouter(MyShowItem);
