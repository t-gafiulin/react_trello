import { ADD_TASK, DELETE_TASK, ADD_BOARD } from '../constants';

export function addTask(task, idTodo) {
    return { 
        type: ADD_TASK, 
        task: task, 
        idTodo: idTodo};
}

export function deleteTask(idTask, idTodo) {
    return { 
        type: DELETE_TASK, 
        idTask: idTask, 
        idTodo: idTodo};
}

export function addBoard(idBoard){
    return { 
        type: ADD_BOARD,
        idBoard: idBoard
    }
}