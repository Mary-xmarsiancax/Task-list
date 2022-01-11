const ADD_TASK = "ADD_TASK"
let initialState = {
    id: 1,
    text: "У попа была собака, он ее любил.Она съела кусок мяса, он ее казнил",
    color: "",
    label: "",
    backgroundColor: ""
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