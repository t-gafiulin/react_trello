

export function getTasks(state = [], action){
    switch(action.type){
    case 'ADD_TASK':
        return [
            ...state,
            action.payload
        ];
    case 'DELETE_TASK':
        return state.filter(el => el.id !== action.payload.id);
    default:
        return state;
    }
}