import { ADD_TASK, DELETE_TASK, ADD_BOARD, DELETE_BOARD } from '../constants';

const initialState = {
    boards: []
}

// export default function tasks(state = initialState, action){
//     switch(action.type){
//         case ADD_BOARD:
//             return {
//                 ...state,
//                 boards: state.boards.concat(state.boards[state.boards.length - 1] + 1 || 0),
//                 [state.boards.length]: []
//             }
//         // case DELETE_BOARD:
//         //     //state.filter(item => console.log(item));
//         //     return 
//         //     state.filter(item => console.log(item));
//         //         //state.filter(item => item.id !== action.idBoard)
//         //         //boards: state.boards.filter(item => item !== action.idBoard),
//         //         //state: state.filter(item => item.id !== action.idBoard)
            
//         case ADD_TASK:
//             let {task, idTodo} = action;
//                 return {
//                     ...state,
//                     [idTodo]: state[idTodo].concat({
//                         id: task.id, task: task.task
//                     })
//                 };   
//         case DELETE_TASK:
//             return {
//                 ...state,
//                 [action.idTodo]: state[action.idTodo].filter(item => item.id !== action.idTask)
//             } 
//         default:
//             return state;
//     }
// }


export default function tasks(state = initialState, action){
    switch(action.type){
        case ADD_BOARD:
            const indexBoard = parseInt(state.boards.length);
            return {
                ...state,
                boards: state.boards.concat({id: indexBoard, tasks: []})//,
                //[state.boards.length]: []
            }
        // case DELETE_BOARD:
        //     //state.filter(item => console.log(item));
        //     return 
        //     state.filter(item => console.log(item));
        //         //state.filter(item => item.id !== action.idBoard)
        //         //boards: state.boards.filter(item => item !== action.idBoard),
        //         //state: state.filter(item => item.id !== action.idBoard)
            
        case ADD_TASK:
            let {task, idTodo} = action;
            let new_arr = [{
                id: task.id, task: task.task
            }];
                return {
                    ...state,
                    boards: [       
                        ...state.boards[idTodo],                 
                        {
                            ...state.boards[idTodo],
                            tasks: 
                                state.boards[idTodo].tasks.concat(task)
                        }   
                    ]
                }
        case DELETE_TASK:
            return {
                ...state,
                [action.idTodo]: state[action.idTodo].filter(item => item.id !== action.idTask)
            } 
        default:
            return state;
    }
}
