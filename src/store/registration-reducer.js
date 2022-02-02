const SET_REGISTRATION_DATA = "SET-REGISTRATION-DATA"
const SET_ERRORS_TEXT = "SET-SET_ERRORS_TEXT-DATA"
export const setRegistrationData = (data) => ({type: SET_REGISTRATION_DATA, data: data});
export const setErrorsText = (text) => ({type: SET_ERRORS_TEXT, text});

let initialState = {
    id: null,
    username: "",
    textError: ""
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTRATION_DATA: {
            let copyState = {...state}
            copyState = action.data
            return copyState
        }
        case SET_ERRORS_TEXT: {
            let copyState = {...state}
            copyState.textError = action.text
            return copyState
        }
        default:
            return state;
    }
}
export default registrationReducer;