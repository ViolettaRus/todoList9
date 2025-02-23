import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = (todo) => {
    axios.post('http://localhost:3001/todos', todo)
      .then(response => setTodos([...todos, response.data]))
      .catch(error => console.error('Error adding todo:', error));
  };

  const updateTodo = (id, updatedTodo) => {
    axios.put(`http://localhost:3001/todos/${id}`, updatedTodo)
      .then(response => setTodos(todos.map(todo => todo.id === id ? response.data : todo)))
      .catch(error => console.error('Error updating todo:', error));
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo.id !== id)))
      .catch(error => console.error('Error deleting todo:', error));
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTodos = sortAlphabetically
    ? filteredTodos.sort((a, b) => a.title.localeCompare(b.title))
    : filteredTodos;

  return (
    <TodoContext.Provider value={{
      todos: sortedTodos,
      addTodo,
      updateTodo,
      deleteTodo,
      searchTerm,
      setSearchTerm,
      sortAlphabetically,
      setSortAlphabetically
    }}>
      {children}
    </TodoContext.Provider>
  );
};
