import { ADD_TASK, DELETE_TASK } from '../constants';

export function addTask(task, idTodo) {
    return {type: ADD_TASK, task: task, idTodo: idTodo};
}

export function deleteTask(idTask, idTodo) {
    return {type: DELETE_TASK, idTask: idTask, idTodo: idTodo};
}