import s from "./taskBlock.module.css";
import note from "../../../img/images (2).png";
import {Button} from "@mui/material";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {taskDelete} from "../../../store/taskList-reducer";

const TaskBlockZone = (props) => {
    const dispatch = useDispatch()
    const [selectedId, setSelectedId] = useState(undefined)
    const onSelectedTask = (id) => {
        setSelectedId(id)
    }

    const toActiveEditMode = (props) => {
        dispatch(props.changedEditMode(true))
        console.log("i dispatch action for changed editMode to true")
    }

    const deactivationEditMode = () => {
        dispatch(props.changedEditMode(false))
    }

    const tasksDelete = (id) => {
        dispatch(taskDelete(id))
    }

    const taskBlockZone = props.newTasksData.map(obj =>
        <div onClick={() => onSelectedTask(obj.id)} key={obj.id} className={s.taskBlock}>
            <img src={note} alt="noteBackground"/>
            <p>{obj.text}</p>
            {selectedId === obj.id &&
            <div className={s.tasksBtn}>
                <Button onClick={deactivationEditMode} className={s.saveTasksBtn} variant="contained"
                        endIcon={<SendIcon/>}>Save</Button>
                <Button onClick={() => tasksDelete(obj.id)} className={s.deleteTasksBtn} variant="outlined"
                        startIcon={<DeleteIcon/>}>Delete</Button>
            </div>
            }
        </div>
    )

    return (
        <div className={s.taskBlocks}>
            {taskBlockZone}
        </div>
    )
}
export default TaskBlockZone;