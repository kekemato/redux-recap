import { createStore } from 'redux'

const FIRST_ACTION = 'FIRST_ACTION'

const INITIAL_STATE = {
    firstAction: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FIRST_ACTION:
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

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.dispatchFirstAction = () => store.dispatch({
    type: FIRST_ACTION
})
