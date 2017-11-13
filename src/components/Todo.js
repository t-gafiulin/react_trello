import React, { Component } from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addBoard } from '../AC/index';

export class Todo extends Component{

    addTodoList(){
        this.props.addBoard(this.props.boards);
    }

    render(){
        const todolist = [];
        for(let i = 0; i < this.props.boards; i++){
            todolist.push(<TodoList id={i} key={i} />);
        }

        return <div>
            {todolist}
            <button onClick={this.addTodoList.bind(this)}>Add TodoList</button>
        </div>;
    }
}

export default connect (
    state => ({
        boards: state.tasks.boards
    }),
    { addBoard }
)(Todo);