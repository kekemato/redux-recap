import { createStore, combineReducers } from 'redux'

const INC = 'INC'
const DEC = 'DEC'

const INITIAL_STATE_FIRST_REDUCER = {
    firstAction: false
}

const firstActionReducerName = (state = INITIAL_STATE_FIRST_REDUCER, action) => {
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

const INITIAL_STATE_COUNTER = {
    counter: 0
}

const counterReducerName = (state= INITIAL_STATE_COUNTER, action) => {
    switch(action.type){
        case INC:{
            return{
                ...state,
                counter: state.counter + 1
            }
        }
        case DEC:{
            return{
                ...state,
                counter: state.counter - 1
            }
        }
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
window.inc = () => store.dispatch(inc())
window.dec = () => store.dispatch(dec())

const firstAction = () => ({
    type: 'FIRST_ACTION'
})

const inc = () => ({
    type: INC
})

const dec = () => ({
    type: DEC
})