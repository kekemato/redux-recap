const NEW_TASK = 'toDo/NEW_TASK'
const ADD_NEW_TASK = 'toDo/ADD_NEW_TASK'
const FILTER_ALL = 'toDo/FILTER_ALL'
const FILTER_COMPLETED = 'toDo/FILTER_COMPLETED'
const FILTER_UNCOMPLETED = 'toDo/FILTER_UNCOMPLETED'
const TOGGLE_COMPLETED = 'toDo/TOGGLE_COMPLETED'

const INITIAL_STATE = {
    tasks: [],
    visibleTasks: [],
    text: ''
}

export const newTaskAction = text => ({
    type: NEW_TASK,
    text
})

export const addNewTaskAction = () => ({
    type: ADD_NEW_TASK
})

export const filterAllTasksAction = () => ({
    type: FILTER_ALL
})

export const filterCompletedTasksAction = () => ({
    type: FILTER_COMPLETED
})

export const filterUncompletedTasksAction = () => ({
    type: FILTER_UNCOMPLETED
})

export const toggleCompleted = (key) => ({
    type: TOGGLE_COMPLETED,
    key
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_TASK:
            return {
                ...state,
                text: action.text
            }
        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: state.tasks.concat({ task: state.text, isCompleted: false, key: Date.now() }),
                visibleTasks: state.visibleTasks.concat({ task: state.text, isCompleted: false, key: Date.now() })
            }
        case FILTER_ALL: {
            return {
                ...state,
                visibleTasks: state.tasks
            }
        }
        case FILTER_COMPLETED: {
            return {
                ...state,
                visibleTasks: state.tasks.filter(task => task.isCompleted === true)
            }
        }
        case FILTER_UNCOMPLETED: {
            return {
                ...state,
                visibleTasks: state.tasks.filter(task => task.isCompleted === false)
            }
        }
        case TOGGLE_COMPLETED: {
            return {
                ...state,
                tasks: [...state.tasks, {
                    ...state.tasks.find(task => task.key === action.key),
                    isCompleted: !state.tasks.find(task => task.key === action.key).isCompleted
                }]
            }
        }
        default:
            return state
    }
}