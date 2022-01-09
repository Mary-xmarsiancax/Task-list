const ADD_TASK = "ADD_TASK"
let initialState = {
    id: null,
    text: "aaa",
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