import s from "./taskBlock.module.css";
import note from "../../../img/images (2).png";
import {Button} from "@mui/material";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";
import {createRef, useState} from "react";
import {useDispatch} from "react-redux";
import {changeText, taskDelete} from "../../../store/taskList-reducer";


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

    const changeTextInput = (id,e) => {
        let text = e.target.value;
        dispatch((changeText(id, text)));
        console.log(id, text);
    }

    const taskBlockZone = props.tasks.map(obj =>
        <div onClick={() => onSelectedTask(obj.id)} key={obj.id} className={s.taskBlock}>
            <img src={note} alt="noteBackground"/>
            <textarea onChange={(event)=>changeTextInput(obj.id,event)}  className={s.textareaForTasks}
                      placeholder="you can write there"
                      value={obj.text}
            />
            {selectedId === obj.id &&
            <div className={s.tasksBtn}>
                <Button size="small" onClick={deactivationEditMode} className={s.saveTasksBtn} variant="contained"
                        endIcon={<SendIcon/>}>Save</Button>
                <Button size="small" onClick={() => tasksDelete(obj.id)} className={s.deleteTasksBtn} variant="outlined"
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