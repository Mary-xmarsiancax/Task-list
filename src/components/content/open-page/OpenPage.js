import NotepadBackground from "../../../img/NotepadBackground.png"
import s from "./OpenPage.module.css"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {tasksApi} from "../../../api/api";
import {setTasks} from "../../../store/taskList-reducer";


const OpenPage = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
                navigate ("/taskList", {replace: true})
        }
    }, [localStorage.getItem("token")])

    return (
        <div className={s.loginWr}>
            <img className={s.loginBackgroundImg}
                src={NotepadBackground}
                alt="Notepad logo"/>
        </div>
    )
}
export default OpenPage;