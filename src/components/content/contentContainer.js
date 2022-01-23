import OpenPage from "./open-page/OpenPage";
import {Route, Routes} from "react-router-dom";
import RegistrationPageContainer from "./registration-page/RegistrationPageContainer";
import TaskListPageContainer from "./tasksList-page/TaskListPageContainer";
import LoginPageContainer from "./login/LoginPageContainer";

const ContentContainer = (props) => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPageContainer/>}/>
                <Route path="/registration" element={<RegistrationPageContainer/>}/>
                <Route path="/taskList" element={<TaskListPageContainer/>}/>
                <Route path="/" element={<OpenPage/>}/>
            </Routes>
        </div>
    )
}
export default ContentContainer;