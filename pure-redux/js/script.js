const {createStore} = window.Redux;

// action là object vd: {type: 'increment'}

const initialState = {value: 0};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {value: state.value + action.payload};
            break;
        case 'decrement':
            return {value: state.value - action.payload};
            break;
        default:
            return state;
    }
}

let store = createStore(counterReducer);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch({type: 'increment', payload: 5});