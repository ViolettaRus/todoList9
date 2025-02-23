const initialState = {
  searchTerm: '',
};

const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
