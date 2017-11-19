import React from 'react';
import { withRouter } from 'react-router-dom';

const CommentIndexItem = ({ comment, router, history }) => {
  return (
    <div className='c-index-div'>
      <div className='c-author'>
        <div className='c-avatar'>
          <img src={comment.comment_url}></img>
        </div>
        <div className='c-author-info'>
          <span>{comment.author}</span>

        </div>
      </div>
      <div className='c-body'>
        {comment.body}
      </div>
    </div>
  )
}

export default withRouter(CommentIndexItem);
