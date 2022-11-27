import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTodoAction: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteTodoAction: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },
  },
});

export const { addTodoAction, deleteTodoAction } = todoSlice.actions;

export default todoSlice.reducer;

export const todos = state => state.todos;
