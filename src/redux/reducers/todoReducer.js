import { createSlice } from "@reduxjs/toolkit";
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";


const initialState = {
    todos:[]
}

//  creating reducers using redux toolkit

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers:{
        add: (state, action)=>{
            state.todos.push({
                text: action.payload,
                completed:false
            })
        },
        toggle:(state, action)=>{
            state.todos.map((todo, i)=>{
                if(i===action.payload){
                    todo.completed=!todo.completed;
                }
                return todo;
            })
        }
    }
})

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
export const todoSelector = (state)=> state.todoReducer.todos;

// creating reducer using redux

// export function todoReducer(state = initialState, action){
//     switch(action.type){
//         case ADD_TODO:
//             return{
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                        text: action.text,
//                        completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, index)=>
//                     index === action.index
//                     ? { ...todo, 
//                     completed: !todo.completed }
//                     : todo
//                 )
//             }
//         default:
//             return state;
//     }
// }