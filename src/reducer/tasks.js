import { ADD_TASK, DELETE_TASK } from '../constants';

const initialState = {
    1: [],
    2: []
}

export default function tasks(state = initialState, action){
    var index = 0;
    switch(action.type){
    case ADD_TASK:
        let {task, idTodo} = action.payload;
        return {
            ...state,
            [idTodo]: state[idTodo].concat({
                id: task.id, task: task.task
            })
        };   
    case DELETE_TASK:
        return {
            ...state.todos,
            todos: state.todos.filter(item => item.id !== action.payload.idTask)
        } 
    default:
        return state;
    }
}