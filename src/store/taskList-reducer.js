const ADD_TASK = "ADD_TASK"
const CHANGED_EDIT_MODE = "CHANGED_EDIT_MODE"

const addTask = () => ({type:ADD_TASK})
export const changedEditMode = (mode) => ({type:CHANGED_EDIT_MODE,mode})


let initialState = {
    newTasksData: [
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
            return {}
        }
        case CHANGED_EDIT_MODE: {
            return {
              ...state,editMode: action.mode
            }
        }
        default:
            return state;
    }
}
export default taskListReducer;