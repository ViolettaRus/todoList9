import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, searchTerm, sortAlphabetically } = useSelector((state) => ({
    todos: state.todos.todos,
    searchTerm: state.search.searchTerm,
    sortAlphabetically: state.sort.sortAlphabetically,
  }));

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTodos = sortAlphabetically
    ? filteredTodos.sort((a, b) => a.title.localeCompare(b.title))
    : filteredTodos;

  return (
    <div className="todo-list">
      {sortedTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
