//Using middleware thunk for APIs:

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';


//action name constatnts
//to reduce typos while using them further in code
const init = 'getAccount'
const inc = 'increment'
const dec = 'decrement'
const incByAmt = 'incrementByAmount'
const decByAmt = 'decrementByAmount'

// initialise()


//action creators
//to minimise writing within dispatch
async function initialise(dispatch) {
    //Async API call
    const res = await axios.get('http://localhost:3000/accounts/1')

    //and we 'dispatch' another function inside an async function, not 'return' like in prev case
    dispatch(initAccount(res.data.amount))
}
function initAccount(value) {
    return { type: init, payload: value }
}
function increment() {
    return { type: inc }
}
function decrement() {
    return { type: dec }
}
function incrementByAmount() {
    return { type: incByAmt, payload: 20 }
}
function decrementByAmount(value) {
    return { type: decByAmt, payload: value }
}

//initialise store states
const initialState = { amount: 0 }

//initialise reducer with conditiions
function reducer(state = initialState, action) {
    switch (action.type) {
        case init:
            return { amount: state.amount + action.payload }
        case inc:
            return { amount: state.amount + 1 }
        case dec:
            return { amount: state.amount - 1 }
        case incByAmt:
            return { amount: state.amount + action.payload }
        case decByAmt:
            return { amount: state.amount - action.payload }
        default:
            return state;
    }
}

//initialise store
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));

//to do action
//we call async functions without parenthesis
store.dispatch(initialise)
