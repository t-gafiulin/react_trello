import React, { Component } from 'react';
import TodoList from './TodoList';


export default class Todo extends Component{
    state = {
        quantity: 0
    }

    addTodoList(){
        this.setState({quantity: this.state.quantity + 1});
    }

    render(){
        const todolist = [];
        for(let i = 0; i < this.state.quantity; i++){
            todolist.push(<TodoList id={i} key={i} />);
        }

        return <div>
            {todolist}
            <button onClick={this.addTodoList.bind(this)}>Add TodoList</button>
        </div>;
    }
}