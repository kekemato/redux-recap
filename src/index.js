import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store.js'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>

    </Provider>,
    document.getElementById('root'))
