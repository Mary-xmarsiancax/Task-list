const SET_REGISTRATION_DATA = "SET-REGISTRATION-DATA"
export const setRegistrationData = (data) => ({type: SET_REGISTRATION_DATA, data: data});

let initialState = {
    id: null,
    username: ""
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTRATION_DATA: {
            let copyState = {...state}
            copyState = action.data
            return copyState
        }
        default:
            return state;
    }
}
export default registrationReducer;