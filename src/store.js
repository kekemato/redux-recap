import { createStore, combineReducers } from 'redux'

const INITIAL_STATE = {
    firstAction: false
}

const firstActionReducerName = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FIRST_ACTION':
            return {
                ...state,
                firstAction: true
            }
        default:
            return {
                ...state,
                firstAction: false
            }
    }
}

const counterReducerName = (state= {counter: 0}, action) => {
    switch(action.type){
        default:
        return state
    }
}

const rootReducer = combineReducers({
    firstActionReducerName,
    counterReducerName
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.dispatchFirstAction = () => store.dispatch(firstAction())

const firstAction = () => ({
    type: 'FIRST_ACTION'
})