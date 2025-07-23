import { BUY_CAKE } from "./CakesType";


const initial_state = {
    number_of_cake: 10
};

const cakes_reducer = (state=initial_state, action) =>{
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                number_of_cake: state.number_of_cake - 1
            }
    
        default:
            return state;
    }
}

export default cakes_reducer;