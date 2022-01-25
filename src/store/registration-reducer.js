const SET_REGISTRATION_DATA = "SET-REGISTRATION-DATA"
export const setRegistrationData = (data) => ({type: SET_REGISTRATION_DATA, data: data});

let initialState = {
    id: null,
    username: "",
    isAuth: false
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTRATION_DATA: {
            console.log(action.data);
            let copyState = {...state}
            copyState = action.data
            return copyState
        }
        default:
            return state;
    }
}
export default registrationReducer;