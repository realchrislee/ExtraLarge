export const fetchStories = () => {
  return $.ajax({
    method: 'get',
    url: '/api/stories',
  });
};

export const fetchStory = id => {
  return $.ajax({
    method: 'get',
    url: `/api/stories/${id}`
  });
};

export const createStory = story => {
  return $.ajax({
    url: `api/stories`,
    method: 'post',
    data: { story }
  });
};

export const updateStory = story => {
  return $.ajax({
    url: `api/stories/${story.id}`,
    method: 'patch',
    data: { story }
  });
};

export const deleteStory = storyId => {
  return $.ajax({
    url: `api/stories/${storyId}`,
    method: 'delete',
  });
};
