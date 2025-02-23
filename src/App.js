import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './reducers/todosReducer';
import { setSearchTerm } from './reducers/searchReducer';
import { toggleSort } from './reducers/sortReducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { searchTerm, sortAlphabetically } = useSelector((state) => ({
    searchTerm: state.search.searchTerm,
    sortAlphabetically: state.sort.sortAlphabetically,
  }));

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>Список дел</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        placeholder="Поиск дел"
        className="search-input"
      />
      <button onClick={() => dispatch(toggleSort())} className="sort-button">
        {sortAlphabetically ? 'Сортировка по умолчанию' : 'Сортировка по алфавиту'}
      </button>
      <div className="todo-form">
        <TodoForm />
      </div>
      <div className="todo-list">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
