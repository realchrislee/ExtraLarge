export const fetchComments = () => {
  return $.ajax({
    method: 'get',
    url: '/api/comments'
  });
};

export const fetchComment = id => {
  return $.ajax({
    method: 'get',
    url: `/api/comments/${id}`
  });
};

export const createComment = comment => {
  return $.ajax({
    url: `api/comments`,
    method: 'post',
    data: { comment }
  });
};

export const updateComment = comment => {
  return $.ajax({
    url: `api/comments/${comment.id}`,
    method: 'patch',
    data: { comment }
  });
};

export const deleteComment = id => {
  return $.ajax({
    url: `api/comments/${id}`,
    method: 'delete'
  });
};
