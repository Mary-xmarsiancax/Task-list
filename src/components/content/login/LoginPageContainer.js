import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import LoginPage from "./LoginPage";

const LoginPageContainer = (props) => {
    if (props.isAuth) return <Navigate  to={"/taskList"} replace={true}/>
    return (
        <LoginPage/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.registration.isAuth
})

export default connect(mapStateToProps)(LoginPageContainer);