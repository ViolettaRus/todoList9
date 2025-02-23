const initialState = {
  sortAlphabetically: false,
};

const TOGGLE_SORT = 'TOGGLE_SORT';

export const toggleSort = () => ({
  type: TOGGLE_SORT,
});

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SORT:
      return { ...state, sortAlphabetically: !state.sortAlphabetically };
    default:
      return state;
  }
};

export default sortReducer;
