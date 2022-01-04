import NotepadBackground from "../../img/NotepadBackground.png"
import s from "../content/Login.module.css"
import LoginForm from "./LoginForm";

const Login = (props) => {
    return (
        <div className={s.loginWr}>
            <img className={s.loginBackgroundImg}
                src={NotepadBackground}
                alt="Notepad logo"/>
            <div className={s.loginFormWr}>
                <LoginForm/>
            </div>
        </div>
    )
}
export default Login;