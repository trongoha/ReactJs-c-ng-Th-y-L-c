const { createStore } = window.Redux;

// action là object vd: {type: 'increment'}

const initialState = { money: 0 };
const bankReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return { money: state.money + action.payload };
        case 'decrement':
            return { money: state.money - action.payload };
        default:
            return state;
    }
}
let store = createStore(bankReducer);

store.subscribe(() => {
    const state = store.getState();
    const money = state.money;
    //Hiển thị lại kết quả số $$$ (money)
    var divTag = document.querySelector("#result");
    divTag.innerHTML = money;
});

const buttonTags = document.querySelectorAll('button');
for (const buttonTag of buttonTags) {
    buttonTag.onclick = function () {
        var type = buttonTag.getAttribute('data');
        if (type == 'deposit') {
            store.dispatch({type: 'increment', payload: 10});
        } 
        else {
            store.dispatch({type: 'decrement', payload: 10});
        }
    };
}