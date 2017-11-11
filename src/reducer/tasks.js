import { ADD_TASK, DELETE_TASK } from '../constants';

const initialState = {
    todos: [
        // { id: 0, task: '1' },
        // { id: 1, task: 'q'}
    ]
}

export default function tasks(state = initialState, action){
    switch(action.type){
    case ADD_TASK:
        const todosLength = state.todos.length;
        return {
            ...state,
            todos: [
                ...state.todos,
                action.payload
            ]
        };  
    case DELETE_TASK:
        return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      } 
    default:
        return state;
    }
}