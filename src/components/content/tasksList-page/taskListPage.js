import s from "./taskList.module.css";
import note from "../../../img/images (2).png";

const TaskListPage =(props)=>{
    return(
        <div className={s.taskBlock}>
        <img src={note} alt="noteBackground"/>
        <p>{props.text}</p>
    </div>
    )
}
export default TaskListPage;