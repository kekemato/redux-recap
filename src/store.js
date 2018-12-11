import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import counterReducerName from './state/counter'
import toDo from './state/toDo'
import fetchUsers from './state/fetchUsers';

const reducer = combineReducers({
    counterReducerName,
    toDo,
    fetchUsers
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
