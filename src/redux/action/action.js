import { ADD_TASK, EDIT_TASK, STATUS_UPDATE } from "../constants/actionTypes";

const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

const editTask = (editedTask) => {
    return {
        type: EDIT_TASK,
        payload: editedTask
    }
}

const statusUpdate = (newStatusUpdate) => {
    return {
        type: STATUS_UPDATE,
        payload: newStatusUpdate
    }
}



export { addTask, editTask, statusUpdate }