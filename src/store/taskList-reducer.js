const ADD_TASK = "ADD_TASK"
let initialState = {
    newTasksData: [
        {id: 1,
    text: "У попа была собака, он ее любил.Она съела кусок мяса, он ее казнил",
    color: "",
    label: "",
    backgroundColor: ""},
        {id: 2,
            text: "У кита была собака, он ее любил.Она съела кусок мяса, он ее казнил",
            color: "",
            label: "",
            backgroundColor: ""},
        {id: 3,
            text: "У кота была собака, он ее любил.Она съела кусок мяса, он ее казнил",
            color: "",
            label: "",
            backgroundColor: ""},
        {id: 4,
            text: "У шута была собака, он ее любил.Она съела кусок мяса, он ее казнил",
            color: "",
            label: "",
            backgroundColor: ""},
    ],
    editMode: false

}

const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {

            }
        }
        default:
            return state;
    }
}
export default taskListReducer;