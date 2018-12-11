import React from 'react'
import { connect } from 'react-redux'
import { List, MenuItem, TextField, RaisedButton } from 'material-ui'
import { fetchUserList, specifyUsersNumberAction } from './state/fetchUsers'

class FetchUsers extends React.Component {
    componentDidMount() {
        this.props._fetchUserList()
    }
    render() {
        return (
            <div>
                <TextField
                    type='number'
                    hintText='How many users?'
                    value={this.props._number}
                    onChange={this.props._specifyUsersNumberAction}
                />
                <RaisedButton
                    label='fetch new users'
                    primary={true}
                    onClick={() => this.props._fetchUserList()}
                />
                <List>
                    {this.props._userList.map(user => (
                        <MenuItem
                            primaryText={user.name.first + ' ' + user.name.last}
                            key={user.login.uuid}
                        />
                    ))}
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _userList: state.fetchUsers.users,
    _number: state.fetchUsers.number
})

const mapDispatchToProps = dispatch => ({
    _fetchUserList: () => dispatch(fetchUserList()),
    _specifyUsersNumberAction: event => dispatch(specifyUsersNumberAction(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchUsers)