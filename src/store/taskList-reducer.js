const CHANGED_EDIT_MODE = "CHANGED_EDIT_MODE"
const TASK_DELETE = "TASK_DELETE"
const CHANGE_TEXT = "CHANGE_TEXT"
const SET_TASKS = "SET_TASKS"

export const changedEditMode = (mode) => ({type: CHANGED_EDIT_MODE, mode})
export const taskDelete = (id) => ({type: TASK_DELETE, id})
export const changeText = (id, text) => ({type: CHANGE_TEXT, id, text})
export const setTasks = (data) => ({type: SET_TASKS, data})


let initialState = {
    tasks: [],
    editMode: false
}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS: {
            let copyState = {...state}
            copyState.tasks = action.data
            return copyState
        }
        case TASK_DELETE: {
            let copyState = {...state}
            let newTaskArr = copyState.tasks.filter((obj) => {
                return obj.id !== action.id
            })
            copyState.tasks = newTaskArr
            return copyState
        }
        case CHANGED_EDIT_MODE: {
            let copyState = {...state}
            copyState.editMode = action.mode
            return copyState
        }
        case CHANGE_TEXT: {
            let selectedObj = state.tasks.find((obj) => {
                return obj.id === action.id
            })
            let objCopy = {...selectedObj}
            objCopy.text = action.text
            let arrCopy = [...state.tasks]
            arrCopy[arrCopy.indexOf(selectedObj)] = objCopy;
            return {...state, tasks: arrCopy}
        }
        default:
            return state;
    }
}
export default taskListReducer;