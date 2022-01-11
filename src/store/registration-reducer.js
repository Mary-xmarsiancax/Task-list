const SET_REGISTRATION_DATA = "SET-REGISTRATION-DATA"
export const setRegistrationData = (data) => ({type: SET_REGISTRATION_DATA, data: data});

let initialState = {
    id: null,
    username: "",
    token: "",
    isAuth: false
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTRATION_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
}
export default registrationReducer;