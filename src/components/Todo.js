import React, { Component } from 'react';
import TodoList from './TodoList';


export default class Todo extends Component{


    render(){
        return <div>
            <TodoList id='1' />
            <TodoList id='2' />
        </div>;
    }
}