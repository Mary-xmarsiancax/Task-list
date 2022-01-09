import NotepadBackground from "../../../img/NotepadBackground.png"
import s from "./OpenPage.module.css"


const OpenPage = (props) => {
    return (
        <div className={s.loginWr}>
            <img className={s.loginBackgroundImg}
                src={NotepadBackground}
                alt="Notepad logo"/>
        </div>
    )
}
export default OpenPage;