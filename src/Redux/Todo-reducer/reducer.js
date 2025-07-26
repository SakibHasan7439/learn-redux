import { ADD_TODO, DELETE_TODO, READ_TODO, UPDATE_TODO, UPDATE_TODO_STATUS } from "../Action-Types/actionTypes";

const initial_state = {
    todos: []
};

export const todo_reducer = (state=initial_state, action) =>{
    switch (action.type) {
        case READ_TODO:
            return {
                ...state,
                todos: action.payload
            };

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
                    return todo.id === action.payload.id ? {...todo, ...action.payload} : todo
                })
            }
        case UPDATE_TODO_STATUS:
            return {
                ...state,
                todos: state.todos.map((todo)=>{
                    return todo.id === action.payload.id ? {...todo, status:action.payload.status}:todo
                })
            }
        default:
            return state;
    }
}