import { createStore } from 'redux'

const initialState = {
    ping: "pong"
}


const reducer = (state, {type, payload}) => {
    switch(type) {
        default:
            return {
                ...state
            }
    }
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store