import RegistrationPage from "./RegistrationPage";
import {useNavigate} from "react-router-dom";




const RegistrationPageContainer = (props) => {
    let navigate = useNavigate();
    if (localStorage.getItem("token")) {
        navigate ("/taskList", {replace: true})
    }
    return (
        <RegistrationPage/>
    )
}

export default RegistrationPageContainer;