import s from "./TaskListPageContainer.module.css"
import {Button} from "@mui/material";
import {connect, useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {addTask, changedEditMode, taskDelete} from "../../../store/taskList-reducer";
import TaskBlockZone from "./taskBlockZone";


const TaskListPageContainer = (props) => {
    const dispatch = useDispatch()
    if (!props.isAuth) return <Navigate to={"/login"} replace={true}/>


    const addTasksInput = () => {
        console.log("i locate to addTasksInput func ")
        dispatch(addTask())
    }

    return (
        <div className={s.taskListWr}>
            <Button variant="contained" onClick={addTasksInput} className={s.addTasksBtn}>add new Task</Button>
            <TaskBlockZone newTasksData={props.newTasksData}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newTasksData: state.tasksList.newTasksData,
    isAuth: state.registration.isAuth,
    editMode: state.tasksList.editMode,

})
export default connect(mapStateToProps, {changedEditMode, taskDelete, addTask})(TaskListPageContainer);