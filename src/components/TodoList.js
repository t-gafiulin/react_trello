import React, { Component } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import { connect } from 'react-redux';
import { addTask, deleteTask } from '../AC';


export class TodoList extends Component{

    addTask(task){
        let newTask = {
            id: this.props.tasks.length,
            task: task
        };
        this.props.addTask(newTask);
    }

    deleteTask(indexTask){
        this.props.deleteTask(indexTask);
    }

    render(){
        console.log(this.props.tasks);
        const tasks = this.props.tasks.map((elem, index) => {
            return <Task 
                deleteTask={this.deleteTask.bind(this)} 
                task={elem.task} 
                index={elem.id}
                key={index}
                addClass={index % 2 === 1 ? 'odd' : 'even'}    
            />;
        });

        return <div id={this.props.id} className='todo'>
            <AddTask addTask={this.addTask.bind(this)} />
            <ul>
                {tasks}
            </ul>
        </div>;
    }
}

export default connect (
    state => ({
        tasks: state.tasks.todos
    }),
    { addTask, deleteTask}
)(TodoList);