import { ADD_TASK, DELETE_TASK } from '../constants';

const initialState = {
}

export default function tasks(state = initialState, action){
    switch(action.type){
    case ADD_TASK:
        let {task, idTodo} = action.payload;
        if(state[idTodo] !== undefined){
            return {
                ...state,
                [idTodo]: state[idTodo].concat({
                    id: task.id, task: task.task
                })
            };   
        } else {
            return {
                ...state,
                [idTodo]: [{
                    id: task.id, task: task.task
                }]
            };
        }
    case DELETE_TASK:
        return {
            // ...state.todos,
            // [idTodo]: state.filter(item => item.id !== action.payload.idTask)
        } 
    default:
        return state;
    }
}