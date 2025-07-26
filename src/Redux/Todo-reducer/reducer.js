import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../Action-Types/actionTypes";

const initial_state = {
    todos: []
};

export const todo_reducer = (state=initial_state, action) =>{
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos, action.payload]
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo)=> todo.id !== action.payload)
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo)=> {
                    todo.id === action.payload.id ? {...todo, ...action.payload} : todo
                })
            }
        default:
            return state;
    }
}