import { createStore } from 'redux'

export const store = createStore(
    () => ({
        people: {
            person1: {
                name: 'Ala'
            },
            person2: {
                name: 'Bartek'
            }
        }
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

