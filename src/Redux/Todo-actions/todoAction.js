import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../Action-Types/actionTypes";

export const add_todo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
};

export const delete_todo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    };
};

export const update_todo = (id, updatedField) => {
    return {
        type: UPDATE_TODO,
        payload: { id, ...updatedField }
    }
};