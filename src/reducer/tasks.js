import { ADD_TASK, DELETE_TASK, ADD_BOARD } from '../constants';

const initialState = {
    boards: 0
}

export default function tasks(state = initialState, action){
    switch(action.type){
        case ADD_BOARD:
            return {
                ...state,
                boards: state.boards + 1,
                [state.boards]: []
            }
        case ADD_TASK:
            let {task, idTodo} = action;
                return {
                    ...state,
                    [idTodo]: state[idTodo].concat({
                        id: task.id, task: task.task
                    })
                };   
        case DELETE_TASK:
            return {
                ...state,
                [action.idTodo]: state[action.idTodo].filter(item => item.id !== action.idTask)
            } 
        default:
            return state;
    }
}

