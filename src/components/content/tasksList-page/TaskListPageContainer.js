import s from "./TaskListPageContainer.module.css"
import {Button} from "@mui/material";
import {connect, useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {changedEditMode} from "../../../store/taskList-reducer";
import TaskBlock from "./taskBlock";




const TaskListPageContainer = (props) => {
    if (!props.isAuth) return <Navigate  to={"/login"} replace={true}/>

    const addTasksInput = () => {

    }

    return (
        <div className={s.taskListWr}>
            <Button variant="contained" onClick={addTasksInput}>add new Task</Button>
            <TaskBlock newTasksData={props.newTasksData} className={s.taskZone}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newTasksData: state.tasksList.newTasksData,
    isAuth: state.registration.isAuth,
    editMode: state.tasksList.editMode,

})
export default connect(mapStateToProps, {changedEditMode})(TaskListPageContainer);