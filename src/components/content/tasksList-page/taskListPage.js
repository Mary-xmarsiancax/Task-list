import s from "./taskList.module.css";
import note from "../../../img/images (2).png";

const TaskListPage =(props)=>{
    return(
        <div className={s.taskBlock}>
        <img src={note} alt="noteBackground"/>
        <p>2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus et id ipsam
            numquam
            perferendis quidem voluptas.
        </p>
    </div>
    )
}
export default TaskListPage;