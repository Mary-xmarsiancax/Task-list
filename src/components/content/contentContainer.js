import OpenPage from "./open-page/OpenPage";
import {Route, Routes} from "react-router-dom";
import RegistrationPage from "./registration-page/RegistrationPage";
import LoginPage from "./login/LoginPage";
import TaskListPage from "./tasksList-page/TaskListPage";

const ContentContainer = (props) => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
                <Route path="/taskList" element={<TaskListPage/>}/>
                <Route path="/" element={<OpenPage/>}/>
            </Routes>
        </div>


    )
}
export default ContentContainer;