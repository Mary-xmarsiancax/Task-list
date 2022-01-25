import NotepadBackground from "../../../img/NotepadBackground.png"
import s from "./RegistrationPage.module.css"
import RegistrationForm from "./RegistrationForm";

const RegistrationPage = (props) => {
    return (
        <div className={s.loginWr}>
            <img className={s.loginBackgroundImg}
                src={NotepadBackground}
                alt="Notepad logo"/>
            <div className={s.loginFormWr}>
                <RegistrationForm />
            </div>
        </div>
    )
}
export default RegistrationPage;