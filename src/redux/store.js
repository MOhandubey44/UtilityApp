
// import  redux from "react";

// import { createStore } from "redux";

// import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import { todoReducer } from "./reducers/todoReducer";

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

export const store = configureStore({
    reducer: {
        todoReducer,
        noteReducer
    }
});

