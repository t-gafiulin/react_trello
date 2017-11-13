import React, { Component } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import { connect } from 'react-redux';
import { addTask, deleteTask } from '../AC';


export class TodoList extends Component{

    constructor(){
        super();
        this.state = {
            index: 0
        }
    }

    addTask(task){
        let newTask = {
            id: this.state.index,
            task: task
        };
        this.props.addTask(newTask, this.props.id);

        //this.props.addTask(task, this.props.id);
        this.setState({index: this.state.index + 1});
    }

    deleteTask(indexTask){
        this.props.deleteTask(indexTask, this.props.id);
    }

    render(){
        console.log(this.props.tasks[this.props.id]);
        const tasks = this.props.tasks[this.props.id].map((elem, index) => {
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
        tasks: state.tasks
    }),
    { addTask, deleteTask}
)(TodoList);