import React from 'react'
import { connect } from 'react-redux'
import { RaisedButton, TextField, List, MenuItem } from 'material-ui'
import {
    newTaskAction,
    addNewTaskAction,
    filterAllTasksAction,
    filterCompletedTasksAction,
    filterUncompletedTasksAction,
} from './state/toDo'

const ToDo = props => (
    <div>
        <TextField
            hintText='Type your task'
            onChange={props._newTaskAction}
        />
        <RaisedButton
            primary={true}
            label='Add task'
            onClick={props._addNewTaskAction}
        />
        <br />
        <RaisedButton
            primary={true}
            label='Show all tasks'
            onClick={props._filterAllTasksAction}
        />
        <RaisedButton
            primary={true}
            label='Show completed tasks'
            onClick={props._filterCompletedTasksAction}
        />
        <RaisedButton
            primary={true}
            label='Show uncompleted tasks'
            onClick={props._filterUncompletedTasksAction}
        />
        <List>
            {props._taskList.map(task => (
                <MenuItem
                    primaryText={task.task}
                    key={task.key}
                />
            ))}
        </List>
    </div>
)

const mapStateToProps = state => ({
    _taskList: state.toDo.visibleTasks
})

const mapDispatchToProps = dispatch => ({
    _newTaskAction: event => dispatch(newTaskAction(event.target.value)),
    _addNewTaskAction: () => dispatch(addNewTaskAction()),
    _filterAllTasksAction: () => dispatch(filterAllTasksAction()),
    _filterCompletedTasksAction: () => dispatch(filterCompletedTasksAction()),
    _filterUncompletedTasksAction: () => dispatch(filterUncompletedTasksAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)