const { createStore } = window.Redux;

// action là object vd: {type: 'increment'}

const initialState = [];
const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            var newState =  [...state];
            newState.push(action.payload)
            return newState;
        case 'remove':
            var newState = [...state];
            const key = action.payload;
            newState.splice(key,1);
            return newState;
        default:
            return state;
    }
}

let store = createStore(todoListReducer);
store.subscribe(() => {
    const todoList = store.getState();
    const olTag = document.querySelector('#view-todolist');
    olTag.innerHTML = '';
    for (const todo of todoList) {
        const liTag = document.createElement("li");
        liTag.textContent = todo;
        olTag.appendChild(liTag);
    }
});

const formTag = document.querySelector('form');
formTag.onsubmit = function(e) {
    e.preventDefault();
    const inputTag = formTag.querySelector('input');
    const taskName = inputTag.value;
    store.dispatch({type: 'add', payload: taskName});
    this.reset();
}
