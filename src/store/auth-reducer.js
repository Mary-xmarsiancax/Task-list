const AUTH = "AUTH"
let initialState = {
    isAuth: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH: {
            return {

            }
        }
        default:
            return state;
    }
}
export default authReducer;