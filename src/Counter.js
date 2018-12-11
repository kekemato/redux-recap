import React from 'react'
import { connect } from 'react-redux'
import { inc, dec } from './state/counter'

const Counter = props => (
    <div>
        <h1>{props._counterValue}</h1>
        <button
            onClick={props._inc}
        >
            +
        </button>
        <button
            onClick={props._dec}
        >
            -
        </button>
    </div>
)

const mapStateToProps = state => ({
    _counterValue: state.counterReducerName.counter
})

const mapDispatchToProps = dispatch => ({
    _inc: () => dispatch(inc()),
    _dec: () => dispatch(dec())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)