// Action constants

export const ADD_TODO = "ADD_todo";
export const TOGGLE_TODO = "Toggle todo";

// Actions creator

export const addTodo = (text)=>({text, type: ADD_TODO});
export const toggleTodo = (index)=>({index, type: TOGGLE_TODO});


