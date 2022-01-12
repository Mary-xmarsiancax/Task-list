import s from "./taskBlock.module.css";
import note from "../../../img/images (2).png";
import {Button} from "@mui/material";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";
import {useDispatch} from "react-redux";
import {changedEditMode} from "../../../store/taskList-reducer";


const TaskBlock = (props) => {


    return (
        <div className={s.taskBlock} >
            <img src={note} alt="noteBackground"/>
            <p>{props.text}</p>
            {/*{props.editMode &&*/}
            {/*<div className={s.tasksBtn}>*/}
            {/*    <Button onClick={{deactivationEditMode}} className={s.saveTasksBtn} variant="contained" endIcon={<SendIcon />}>Save</Button>*/}
            {/*    <Button className={s.deleteTasksBtn} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>*/}
            {/*</div>}*/}
        </div>
    )
}
export default TaskBlock;