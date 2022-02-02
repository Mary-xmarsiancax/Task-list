import LoginPage from "./LoginPage";
import {connect} from "react-redux";

const LoginPageContainer = (props) => {
    return (
        <LoginPage textError={props.textError}/>
    )
}

const mapStateToProps = (state) => ({
    textError: state.registration.textError
})

export default connect(mapStateToProps, null)(LoginPageContainer);