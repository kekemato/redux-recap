import { createStore, combineReducers } from 'redux'
import counterReducerName, { inc, dec } from './state/counter'
import toDo, {
    newTaskAction,
    addNewTaskAction,
    filterAllTasksAction,
    filterCompletedTasksAction,
    filterUncompletedTasksAction
} from './state/toDo'

const rootReducer = combineReducers({
    counterReducerName,
    toDo
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = () => store.dispatch(inc())
window.dec = () => store.dispatch(dec())
window.newTaskAction = text => store.dispatch(newTaskAction(text))
window.addNewTaskAction = () => store.dispatch(addNewTaskAction())
window.filterAllTasksAction = () => store.dispatch(filterAllTasksAction())
window.filterCompletedTasksAction = () => store.dispatch(filterCompletedTasksAction())
window.filterUncompletedTasksAction = () => store.dispatch(filterUncompletedTasksAction())

