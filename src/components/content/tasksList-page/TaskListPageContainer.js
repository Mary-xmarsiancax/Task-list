import s from "./TaskListPageContainer.module.css"
import {Button} from "@mui/material";
import {connect} from "react-redux";
import TaskListPage from "./taskListPage";
import {Navigate} from "react-router-dom";

const TaskListPageContainer = (props) => {
    if (!props.isAuth) return <Navigate to={"/login"} replace={true}/>
    let taskEl = props.newTasksData.map(obj =>
        <TaskListPage  key={obj.id} text={obj.text}/>
    )
    const addTasksInput = () => {

    }
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
    editMode: state.tasksList.editMode
})
export default connect(mapStateToProps)(TaskListPageContainer);