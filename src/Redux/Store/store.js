import { createStore } from "redux";
import { todo_reducer } from "../Todo-reducer/reducer";

const store = createStore(todo_reducer);

export default store;