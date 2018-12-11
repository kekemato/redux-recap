import { createStore, combineReducers } from 'redux'
import counterReducerName, { inc, dec } from './state/counter'

const rootReducer = combineReducers({
    counterReducerName
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = () => store.dispatch(inc())
window.dec = () => store.dispatch(dec())
