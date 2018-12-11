import { createStore } from 'redux'

const FIRST_ACTION = 'FIRST_ACTION'

const INITIAL_STATE = {
    people: {
        person1: {
            name: 'Ala'
        },
        person2: {
            name: 'Bartek'
        }
    }
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

store.dispatch({
    type: FIRST_ACTION
})
