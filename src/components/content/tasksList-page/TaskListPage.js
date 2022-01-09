import s from "./taskList.module.css"
import {Input, TextField} from "@mui/material";

const TaskListPage = () => {
    const addTasksInput = () => {

    }
    return (
        <div className={s.taskListWr}>
            <button onClick={addTasksInput}>add new task
                <div>+</div>
            </button>
            <TextField id="outlined-basic"  variant="outlined" className={s.tasksField}/>
        </div>
    )
}
export default TaskListPage;