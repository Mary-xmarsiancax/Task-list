import RegistrationPage from "./RegistrationPage";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";



const RegistrationPageContainer = (props) => {
    if (props.isAuth) return <Navigate  to={"/taskList"} replace={true}/>
    return (
        <RegistrationPage/>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.registration.isAuth
})
export default connect(mapStateToProps)(RegistrationPageContainer);