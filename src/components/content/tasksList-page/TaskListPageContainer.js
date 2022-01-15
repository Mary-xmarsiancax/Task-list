import s from "./TaskListPageContainer.module.css"
import {Button} from "@mui/material";
import {connect, useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {addTask, changedEditMode, changeText, taskDelete} from "../../../store/taskList-reducer";
import TaskBlockZone from "./taskBlockZone";


const TaskListPageContainer = (props) => {
    const dispatch = useDispatch()
    // if (!props.isAuth) return <Navigate to={"/login"} replace={true}/>


    const addTasksInput = () => {
        dispatch(addTask())
    }

    return (
        <div className={s.taskListWr}>
            <Button variant="contained" onClick={addTasksInput} className={s.addTasksBtn}>add new Task</Button>
            <TaskBlockZone tasks={props.tasks}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.tasksList.tasks,
    isAuth: state.registration.isAuth,
    editMode: state.tasksList.editMode,

})
export default connect(mapStateToProps, {changedEditMode, taskDelete, addTask, changeText})(TaskListPageContainer);