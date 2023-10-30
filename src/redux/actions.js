
export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await fetch('https://my-json-server.typicode.com/prashantghadiali/demoJSONServer/posts');
    const data = await response.json();
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_ERROR', payload: error.message });
  }
};

export const addPost = (post) => ({
  type: 'ADD_POST',
  payload: post,
});

export const editPost = (id, updatedData) => ({
  type: 'EDIT_POST',
  payload: { id, updatedData },
});

export const deletePost = (id) => ({
  type: 'DELETE_POST',
  payload: id,
});

export const setFilterByPrice = (priceRange) => ({
  type: 'SET_FILTER_BY_PRICE',
  payload: priceRange,
});
