const SET_USERS = 'fetchUsers/SET_USERS'
const SPECIFY_USERS_NUMBER = 'fetchUsers/SPECIFY_USERS_NUMBER'

const INITIAL_STATE = {
    users: [],
    number: 1
}

export const fetchUserList = () => (dispatch, getState) => {
    const number = getState().fetchUsers.number
    fetch(`https://randomuser.me/api?results=${number}`)
        .then(r => r.json())
        .then(data => dispatch(setUsersAction(data.results)))
}

export const specifyUsersNumberAction = number => ({
    type: SPECIFY_USERS_NUMBER,
    number
})

const setUsersAction = (users) => ({
    type: SET_USERS,
    users
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SPECIFY_USERS_NUMBER:
            return {
                ...state,
                number: action.number
            }
        default:
            return state
    }
}