import s from "./TaskListPageContainer.module.css"
import {Button} from "@mui/material";
import {connect, useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {addTask, changedEditMode, changeText, setTasks, taskDelete} from "../../../store/taskList-reducer";
import TaskBlockZone from "./taskBlockZone";
import {tasksApi} from "../../../api/api";
import {useEffect} from "react";


const TaskListPageContainer = (props) => {
    useEffect(() => {
        if (props.isAuth) {
            tasksApi.getTasks()
                .then(response => {
                    dispatch(setTasks(response.data))
                })
        }
    }, [props.isAuth])


    const dispatch = useDispatch()



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
export default connect(mapStateToProps, {
    changedEditMode,
    taskDelete,
    addTask,
    changeText,
    setTasks
})(TaskListPageContainer);