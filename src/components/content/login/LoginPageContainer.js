import LoginPage from "./LoginPage";
import {connect} from "react-redux";

const LoginPageContainer = (props) => {
    return (
        <LoginPage loginTextError={props.loginTextError}/>
    )
}

const mapStateToProps = (state) => ({
    loginTextError: state.registration.loginTextError
})

export default connect(mapStateToProps, null)(LoginPageContainer);