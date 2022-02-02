import RegistrationPage from "./RegistrationPage";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";




const RegistrationPageContainer = (props) => {
    let navigate = useNavigate();
    if (localStorage.getItem("token")) {
        navigate ("/taskList", {replace: true})
    }
    return (
        <RegistrationPage registrationTextError={props.registrationTextError}/>
    )
}

const mapStateToProps = (state) => ({
    registrationTextError: state.registration.registrationTextError
})

export default connect(mapStateToProps,null)(RegistrationPageContainer);