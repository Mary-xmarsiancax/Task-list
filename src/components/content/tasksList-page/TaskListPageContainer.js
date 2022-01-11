import s from "./TaskListPageContainer.module.css"
import {Button} from "@mui/material";
import {connect} from "react-redux";
import TaskListPage from "./taskListPage";

const TaskListPageContainer = (props) => {
    let taskEl = props.newTasksData.map(obj=>
        <TaskListPage text={obj.text}/>
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
    newTasksData:state.tasksList.newTasksData
})
export default connect(mapStateToProps)(TaskListPageContainer);