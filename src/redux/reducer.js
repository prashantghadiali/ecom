const initialState = {
    posts: [],
    loading: false,
    error: null,
    filterByPrice: 'All' // Default to show all items
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          posts: action.payload,
          loading: false,
          error: null,
          filterByPrice: 'All'
        };
      case 'FETCH_POSTS_ERROR':
        return {
          ...state,
          posts: [],
          loading: false,
          error: action.payload,
          filterByPrice: 'All'
        };
      case 'ADD_POST':
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
        case 'EDIT_POST':
          const { id, updatedData } = action.payload;
          console.log("edit payload", action.payload);
          const updatedPosts = state.posts.map((post) =>
            post.id === id ? { ...post, ...updatedData } : post
          );
          return { ...state, posts: updatedPosts };
        case 'DELETE_POST':
          const postIdToDelete = action.payload;
          const filteredPosts = state.posts.filter((post) => post.id !== postIdToDelete);
          return {
            ...state,
            posts: filteredPosts,
          };
        case 'SET_FILTER_BY_PRICE':
          return {
            ...state,
            filterByPrice: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default postReducer;
  