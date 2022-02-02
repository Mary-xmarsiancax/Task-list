const SET_REGISTRATION_DATA = "SET-REGISTRATION-DATA"
const SET_LOGIN_ERRORS_TEXT = "SET-LOGIN-ERRORS-TEXT"
const SET_REGISTRATION_ERRORS_TEXT = "SET-REGISTRATION-ERRORS-TEXT"
export const setRegistrationData = (data) => ({type: SET_REGISTRATION_DATA, data: data});
export const setLoginErrorsText = (text) => ({type: SET_LOGIN_ERRORS_TEXT, text});
export const setRegistrationErrorsText = (text) => ({type: SET_REGISTRATION_ERRORS_TEXT, text});

let initialState = {
    id: null,
    username: "",
    loginTextError: "",
    registrationTextError:""
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTRATION_DATA: {
            let copyState = {...state}
            copyState = action.data
            return copyState
        }
        case SET_LOGIN_ERRORS_TEXT: {
            let copyState = {...state}
            copyState.loginTextError = action.text
            return copyState
        }
        case SET_REGISTRATION_ERRORS_TEXT: {
            let copyState = {...state}
            copyState.registrationTextError = action.text
            return copyState
        }
        default:
            return state;
    }
}
export default registrationReducer;