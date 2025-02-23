import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import todosReducer from './reducers/todosReducer';
import searchReducer from './reducers/searchReducer';
import sortReducer from './reducers/sortReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  search: searchReducer,
  sort: sortReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
