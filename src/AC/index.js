import { ADD_TASK, DELETE_TASK } from '../constants';

export function addTask(task, idTodo) {
    return {type: ADD_TASK, payload: {task: task, idTodo: idTodo}};
}

export function deleteTask(idTask, idTodo) {
    return {type: DELETE_TASK, payload: {idTask: idTask, idTodo: idTodo}};
}