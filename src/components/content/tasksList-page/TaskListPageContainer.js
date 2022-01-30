import s from "./TaskListPageContainer.module.css"
import {Button} from "@mui/material";
import {connect, useDispatch} from "react-redux";
import {changedEditMode, changeText, setTasks, taskDelete} from "../../../store/taskList-reducer";
import TaskBlockZone from "./taskBlockZone";
import {tasksApi} from "../../../api/api";
import {useEffect} from "react";


const TaskListPageContainer = (props) => {
    useEffect(() => {
        if (localStorage.getItem("token")) {
            tasksApi.getTasks()
                .then(response => {
                    dispatch(setTasks(response.data))
                })
        }
    }, [localStorage.getItem("token")])


    const dispatch = useDispatch()


    const addTask = () => {
        tasksApi.setTask().then(response => {
            tasksApi.getTasks().then(response=>{
                let data = response.data
                dispatch(setTasks(data))
            })
            }
        )
    }

    return (
        <div className={s.taskListWr}>
            <Button variant="contained" onClick={addTask} className={s.addTasksBtn}>add new Task</Button>
            <TaskBlockZone tasks={props.tasks}
                           editMode={props.editMode}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.tasksList.tasks,
    editMode: state.tasksList.editMode,

})
export default connect(mapStateToProps, {
    changedEditMode,
    taskDelete,
    changeText,
    setTasks
})(TaskListPageContainer);