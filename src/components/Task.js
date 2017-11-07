import React, { Component } from 'react';



export default class Task extends Component{
    render(){
        return <div className={`task-block ${this.props.addClass}`}>
            <div className='task-block__task'>{this.props.task}</div>
            <i className="fa fa-trash" aria-hidden="true" onClick={this.props.deleteTask.bind(null, this.props.index)}></i>
        </div>;
    }
}