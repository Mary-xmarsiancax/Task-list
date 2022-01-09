import {combineReducers, createStore} from "redux"
import tasksReducer from "./taskList-reducer"
import registrationReducer from "./registration-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

let reducers = combineReducers({
    // auth: authReducer,
    tasksList: tasksReducer,
    registration: registrationReducer
})
let store = createStore(reducers, composeWithDevTools())
export default store;