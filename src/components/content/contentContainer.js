import OpenPage from "./open-page/OpenPage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./login/LoginPage";
import RegistrationPageContainer from "./registration-page/RegistrationPageContainer";
import TaskListPageContainer from "./tasksList-page/TaskListPageContainer";

const ContentContainer = (props) => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<RegistrationPageContainer/>}/>
                <Route path="/taskList" element={<TaskListPageContainer/>}/>
                <Route path="/" element={<OpenPage/>}/>
            </Routes>
        </div>


    )
}
export default ContentContainer;