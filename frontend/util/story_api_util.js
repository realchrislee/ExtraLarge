export const fetchStories = () => {
  return $.ajax({
    method: 'get',
    url: '/api/stories'
  });
};

export const fetchStory = id => {
  return $.ajax({
    method: 'get',
    url: `/api/stories/${id}`
  });
};

export const createStory = formData => {
  return $.ajax({
    url: `api/stories`,
    method: 'post',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updateStory = (formData, id) => {
  return $.ajax({
    url: `api/stories/${id}`,
    method: 'patch',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const deleteStory = id => {
  return $.ajax({
    url: `api/stories/${id}`,
    method: 'delete'
  });
};
