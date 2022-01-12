import s from "./taskList.module.css";
import note from "../../../img/images (2).png";
import {Button} from "@mui/material";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";


const TaskListPage = (props) => {
    console.log(props.editMode);
    const toActiveEditMode = (props) => {
        props.editMode(true)
    }
    const deactivationEditMode = (props) => {
        props.editMode(false)
    }
    return (
        <div className={s.taskBlock} onClick={toActiveEditMode} onBlur={deactivationEditMode}>
            <img src={note} alt="noteBackground"/>
            <p>{props.text}</p>
            {props.editMode &&
            <div className={s.tasksBtn}>
                <Button className={s.saveTasksBtn} variant="contained" endIcon={<SendIcon />}>Save</Button>
                <Button className={s.deleteTasksBtn} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
            </div>}
        </div>
    )
}
export default TaskListPage;