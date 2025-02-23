import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../reducers/todosReducer';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-item">
      <span>{todo.title}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Удалить</button>
    </div>
  );
};

export default TodoItem;
