import React from 'react';
import { withRouter } from 'react-router-dom';

const CommentIndexItem = ({ comment, router, history }) => {
  return (
    <div className='c-index-div'>
      <div className='c-author'>

      </div>
      <div className='c-body'>
        {comment.body}
      </div>
    </div>
  )
}

export default withRouter(CommentIndexItem);
