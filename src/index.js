
// declare action with a type
const BUY_SANDWICH = 'BUY_SANDWICH';

// action returns a type and action creator is
//  a function that return an action just like the below
// Action is saying what should change using the type

function buy_sandwich(){
    return {
        type: BUY_SANDWICH,
        info: 'First redux action'
    };
}

