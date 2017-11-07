import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


function getTasks(state = [], action){
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

const store = createStore(getTasks);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    
    document.getElementById('root'));
