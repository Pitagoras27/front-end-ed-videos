export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const removeFavorite = (payload) => ({
  type: 'REMOVE_FAVORITE',
  payload,
});

export const sendForm = (payload) => ({
  type: 'SEND_FORM',
  payload,
});

export const logout = (payload) => ({
  type: 'LOGOUT',
  payload,
});

export const register = (payload) => ({
  type: 'REGISTER',
  payload,
});

export const getVideoSource = (payload) => ({
  type: 'PLAYING',
  payload,
});
