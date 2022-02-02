import NotepadBackground from "../../../img/NotepadBackground.png"
import s from "./LoginPage.module.css"
import LoginForm from "./LoginForm";

const LoginPage = (props) => {
    return (
        <div className={s.loginWr}>
            <img className={s.loginBackgroundImg}
                src={NotepadBackground}
                alt="Notepad logo"/>
            <div className={s.loginFormWr}>
                <LoginForm loginTextError={props.loginTextError}/>
            </div>
        </div>
    )
}
export default LoginPage;