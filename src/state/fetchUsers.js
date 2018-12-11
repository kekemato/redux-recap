const SET_USERS = 'fetchUsers/SET_USERS'

const INITIAL_STATE = {
    users: []
}

export const fetchUserList = () => (dispatch, getState) => {
    fetch('https://randomuser.me/api?results=10')
        .then(r => r.json())
        .then(data => dispatch(setUsersAction(data.results)))
}

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
        default:
            return state
    }
}