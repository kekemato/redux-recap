const INC = 'INC'
const DEC = 'DEC'

const INITIAL_STATE = {
    counter: 0
}

export const inc = () => ({
    type: INC
})

export const dec = () => ({
    type: DEC
})

export default (state= INITIAL_STATE, action) => {
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