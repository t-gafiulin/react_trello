import { ADD_TASK, DELETE_TASK } from '../constants';

export default function tasks(state = [], action){
    switch(action.type){
    case ADD_TASK:
        return [
            ...state,
            action.payload
        ];
    case DELETE_TASK:
        return state.filter(el => el.id !== action.payload.id);
    default:
        return state;
    }
}