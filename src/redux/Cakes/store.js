import { createStore } from "redux";
import cakes_reducer from "./CakesReducer";


const store = createStore(cakes_reducer);

export default store;
