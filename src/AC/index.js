import { ADD_TASK, DELETE_TASK } from '../constants';

export function addTask(task) {
    return {type: ADD_TASK, payload: task};
}

export function deleteTask(id) {
    return {type: DELETE_TASK, payload: {id: id}};
}