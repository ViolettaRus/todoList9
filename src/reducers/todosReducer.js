import axios from 'axios';

const initialState = {
  todos: [],
};

const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/todos');
    dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/todos', todo);
    dispatch({ type: ADD_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.payload };
    case ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO_SUCCESS:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
};

export default todosReducer;
