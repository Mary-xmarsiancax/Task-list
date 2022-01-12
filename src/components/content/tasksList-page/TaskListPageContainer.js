import s from "./TaskListPageContainer.module.css"
import {Button} from "@mui/material";
import {connect, useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {changedEditMode} from "../../../store/taskList-reducer";
import TaskBlock from "./TaskBlock";
import {useState} from "react";
import SendIcon from "@material-ui/icons/Send";
import DeleteIcon from "@material-ui/icons/Delete";

const TaskListPageContainer = (props) => {
    const dispatch = useDispatch()
    const [selectedId, setSelectedId] = useState(undefined)
    const onSelectedTask = (id) => {
        setSelectedId(id)
    }

    const toActiveEditMode = (props) => {
        dispatch(changedEditMode(true))
        console.log("i dispatch action for changed editMode to true")
    }

    const deactivationEditMode = (props) => {
        dispatch(changedEditMode(false))
    }

    const addTasksInput = () => {

    }
    if (!props.isAuth) return <Navigate to={"/login"} replace={true}/>

    let taskEl = props.newTasksData.map(obj =>
        <div onClick={() => onSelectedTask(obj.id)} key={obj.id}>
            <TaskBlock editMode={props.editMode} text={obj.text} />
            {selectedId === obj.id &&
            <div className={s.tasksBtn}>
                <Button onClick={{deactivationEditMode}} className={s.saveTasksBtn} variant="contained" endIcon={<SendIcon />}>Save</Button>
                <Button className={s.deleteTasksBtn} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
            </div>
            }
        </div>
    )

    return (
        <div className={s.taskListWr}>
            <Button variant="contained" onClick={addTasksInput}>add new Task</Button>
            <div className={s.taskZone}>
                {taskEl}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newTasksData: state.tasksList.newTasksData,
    isAuth: state.registration.isAuth,
    editMode: state.tasksList.editMode,

})
export default connect(mapStateToProps, {changedEditMode})(TaskListPageContainer);