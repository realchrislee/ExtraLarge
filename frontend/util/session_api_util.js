export const signup = user => {
  return (
    $.ajax({
      method: 'post',
      url: '/api/users',
      data: user
    })
  );
};

export const login = user => {
  return (
    $.ajax({
      url: '/api/session',
      method: 'post',
      data: user
    })
  );
};

export const logout = () => {
  return (
    $.ajax({
      url: '/api/session',
      method: 'delete'
    })
  );
};
