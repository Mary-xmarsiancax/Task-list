const ADD_TASK = "ADD_TASK"
const CHANGED_EDIT_MODE = "CHANGED_EDIT_MODE"
const TASK_DELETE = "TASK_DELETE"
const CHANGE_TEXT = "CHANGE_TEXT"

export const addTask = () => ({type: ADD_TASK})
export const changedEditMode = (mode) => ({type: CHANGED_EDIT_MODE, mode})
export const taskDelete = (id) => ({type: TASK_DELETE, id})
export const changeText = (id, text) => ({type: CHANGE_TEXT, id, text})


let initialState = {
    tasks: [
        {
            id: 1,
            text: "У попа была собака, он ее любил.Она съела кусок мяса, он ее казнил",
            color: "",
            label: "",
            backgroundColor: ""
        },
        {
            id: 2,
            text: "У кита была собака, он ее любил.Она съела кусок мяса, он ее казнил",
            color: "",
            label: "",
            backgroundColor: ""
        },
        {
            id: 3,
            text: "У кота была собака, он ее любил.Она съела кусок мяса, он ее казнил",
            color: "",
            label: "",
            backgroundColor: ""
        },
        {
            id: 4,
            text: "У шута была собака, он ее любил.Она съела кусок мяса, он ее казнил",
            color: "",
            label: "",
            backgroundColor: ""
        },
    ],
    editMode: false

}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const tasks = [...state.tasks];
            tasks.push({
                id: 155,
                text: "",
                color: "",
                label: "",
                backgroundColor: ""
            });
            return {
                tasks
            }
        }
        case TASK_DELETE: {
            return {
                ...state,
                tasks: state.tasks.filter((obj) => {
                    return obj.id !== action.id
                })
            }
        }
        case CHANGED_EDIT_MODE: {
            return {
                ...state, editMode: action.mode
            }
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