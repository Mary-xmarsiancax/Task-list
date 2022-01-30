import s from "./taskBlock.module.css";
import note from "../../../img/images (2).png";
import {Button} from "@mui/material";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";
import {createRef, useState} from "react";
import {useDispatch} from "react-redux";
import {changedEditMode, changeText, setTasks, taskDelete} from "../../../store/taskList-reducer";
import {tasksApi} from "../../../api/api";


const TaskBlockZone = (props) => {
    console.log(props);
    const dispatch = useDispatch()
    const [selectedId, setSelectedId] = useState(undefined)

    const onSelectedTask = (id) => {
        toActivateEditMode()
        setSelectedId(id)
    }

    const toActivateEditMode = (props) => {
        dispatch(changedEditMode(true))
        console.log("i dispatch action for changed editMode to true")
    }
    const toDeactivateEditMode = (props) => {
        dispatch(changedEditMode(false))
        console.log("i dispatch action for changed editMode to false")
    }

    const tasksDelete = (id) => {
        console.log("i want delete task with id:", id)
            tasksApi.deleteTask(id)
                .then(response => {
                    tasksApi.getTasks()
                        .then(response => {
                            dispatch(setTasks(response.data))
                            toDeactivateEditMode()
                        })
                })        // if(response.data.statusText === "OK"){
    }

    const changeTextInput = (id, e) => {
        let text = e.target.value;
        dispatch((changeText(id, text)));
    }
    const onTaskSave = (text,id) => {
                tasksApi.updateTask(text,id)
            .then(response => {
                tasksApi.getTasks()
                    .then(response => {
                        dispatch(setTasks(response.data))
                        toDeactivateEditMode()
                    })
            })
    }

    const taskBlockZone = props.tasks.map(obj =>
        <div onClick={() => onSelectedTask(obj.id)} key={obj.id} className={s.taskBlock}>
            <img src={note} alt="noteBackground"/>
            <textarea onChange={(event) => changeTextInput(obj.id, event)}
                      className={s.textareaForTasks}
                      placeholder="you can write there"
                      value={obj.text}
            />
            {selectedId === obj.id && props.editMode === true ?
            <div className={s.tasksBtn}>
                <Button size="small" onClick={() => onTaskSave(obj.text, obj.id)} className={s.saveTasksBtn}
                        variant="contained"
                        endIcon={<SendIcon/>}>Save</Button>
                <Button size="small" onClick={() => tasksDelete(obj.id)} className={s.deleteTasksBtn}
                        variant="outlined"
                        startIcon={<DeleteIcon/>}>Delete</Button>
            </div> :
                null
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