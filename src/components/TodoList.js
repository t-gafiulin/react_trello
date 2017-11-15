import React, { Component } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import DeleteBoard from './DeleteBoard';
import { connect } from 'react-redux';
import { addTask, deleteTask, deleteBoard } from '../AC';


export class TodoList extends Component{

    addTask(task){
        // let newTask = {
        //     id: this.props.tasks[this.props.id].tasks.length,
        //     task: task
        // };
        // this.props.addTask(newTask, this.props.id);
        this.props.addTask(task, this.props.id);
    }

    deleteTask(indexTask){
        this.props.deleteTask(indexTask, this.props.id);
    }

    deleteBoard(indexBoard){
        this.props.deleteBoard(indexBoard);
    }

    render(){
        let tasks = [];
        //if(this.props.tasks[this.props.id] !== undefined){
            tasks = this.props.tasks.boards[this.props.id].tasks.map((elem, index) => {
                return <Task 
                    deleteTask={this.deleteTask.bind(this)} 
                    task={elem} 
                    index={index}
                    key={index}
                    addClass={index % 2 === 1 ? 'odd' : 'even'}    
                />;
            });
        //} 

        return <div id={this.props.id} className='todo'>
            <DeleteBoard id={this.props.id} deleteBoard={this.deleteBoard.bind(this)} />
            <AddTask addTask={this.addTask.bind(this)} />
            <ul>
                {tasks}
            </ul>
        </div>;
    }
}

export default connect (
    state => ({
        tasks: state.tasks
    }),
    { addTask, deleteTask, deleteBoard }
)(TodoList);