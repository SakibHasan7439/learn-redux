import { applyMiddleware, createStore } from "redux";
import { todo_reducer } from "../Todo-reducer/reducer";
import { thunk } from "redux-thunk";

const store = createStore(
    todo_reducer,
    applyMiddleware(thunk)
);

export default store;