import s from "./TaskListPageContainer.module.css"
import {Button} from "@mui/material";
import {connect} from "react-redux";
import TaskListPage from "./taskListPage";

const TaskListPageContainer = (props) => {
    const addTasksInput = () => {

    }
    return (
        <div className={s.taskListWr}>
            <Button variant="contained" onClick={addTasksInput}>add new Task</Button>
            <div className={s.taskZone}>
                <TaskListPage/>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    id:state.tasksList.id,
    text:state.tasksList.text ,
    color:state.tasksList.color ,
    label:state.tasksList. label,
    backgroundColor:state.tasksList.backgroundColor
})
export default connect(mapStateToProps)(TaskListPageContainer);