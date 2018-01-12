const redux = require("redux");

function count(prevCount = 0, action) {                        //Reducer first
    switch (action.type) {
        case "CHANGE":
            return action.amount + prevCount;
        default:
            return prevCount;
    }
}

function names(prevNames = [], action) {
    switch (action.type) {
        case "ADD_NAME":
            return [...prevNames], action.name; //or return [...prevNames].push(action.name)
        default:
            return prevNames;
    }
}

let store = redux.createStore(redux.combineReducers({ count, names })); //Write store. Returns default state of reducer into the store

store.subscribe(() => {                                        //Every time the state changes on the store, console log the store
    console.log(store.getState());
})

function change(num) {                                         //Action creator that has a type and payload(property called amount in this case. can have as many properties as you'd like.)
    return {
        type: "CHANGE",
        amount: num
    }
}

function addName(name) {
    return {
        type: "ADD_NAME",
        name: name
    }
}

store.dispatch(change(5));
store.dispatch(change(5));
store.dispatch(change(5));
store.dispatch(change(5));
store.dispatch(change(5));
store.dispatch(addName("celeste"));

