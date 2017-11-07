import React, { Component } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import { connect } from 'react-redux';


export class TodoList extends Component{

    addTask(task){
        let newTask = {
            id: this.props.tasks.length,
            task: task
        };
        this.props.addTask(newTask);
    }

    deleteTask(index){
        this.props.deleteTask(index);
    }

    render(){
        const tasks = this.props.tasks.map((elem, index) => {
            return <Task 
                deleteTask={this.deleteTask.bind(this)} 
                task={elem.task} 
                index={elem.id}
                key={index}
                addClass={index % 2 === 1 ? 'odd' : 'even'}    
            />;
        });

        return <div className='todo'>
            <AddTask addTask={this.addTask.bind(this)} />
            <ul>
                {tasks}
            </ul>
        </div>;
    }
}

export default connect (
    state => ({
        tasks: state
    }),
    dispatch => ({
        addTask: (task) => {
            dispatch({type: 'ADD_TASK', payload: task})
        },
        deleteTask: (id) => {
            dispatch({type: 'DELETE_TASK', payload: {id: id}})
        }
    })
)(TodoList);