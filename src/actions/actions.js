// Action types
export const SET_FILTER = 'SET_FILTER';

export const SET_MOVIES = 'SET_MOVIES';

export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

// Action creator functions
export const setFilter = (value) => {
  return { type: SET_FILTER, value };
};

export const setMovies = (value) => {
  return { type: SET_MOVIES, value };
};

export const setUser = (value) => {
  return { type: SET_USER, value };
};

export const updateUser = (value) => {
  return { type: UPDATE_USER, value };
};

export const deleteUser = (value) => {
  return { type: DELETE_USER, value };
};

export const addFavorite = (value) => {
  return { type: ADD_FAVORITE, value };
};

export const deleteFavorite = (value) => {
  return { type: DELETE_FAVORITE, value };
};
