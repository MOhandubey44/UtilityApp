import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";


const initialState = {
    todos:[]
}
export function todoReducer(state = initialState, action){
    
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos:[
                    ...state.todos,
                    {
                       text: action.text,
                       completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo, index)=>
                    index === action.index
                    ? { ...todo, completed: !todo.completed }
                    : todo
                )
            }
        default:
            return state;
    }
}