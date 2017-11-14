import React, { Component } from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addBoard } from '../AC/index';

export class Todo extends Component{

    addTodoList(){
        // this.props.addBoard(this.props.boards);
        this.props.addBoard(this.props.boards.boards);
    }

    render(){
        console.log(this.props.boards);
        const todolist = this.props.boards.boards.map((elem, index) => {
            // return <TodoList id={elem} key={index} />;
            return <TodoList id={elem.id} key={index} />;
        })


        return <div>
            {todolist}
            <button onClick={this.addTodoList.bind(this)}>Add TodoList</button>
        </div>;
    }
}

export default connect (
    state => ({
        //boards: state.tasks.boards
        boards: state.tasks
    }),
    { addBoard }
)(Todo);