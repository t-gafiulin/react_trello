import React from 'react';

const Task = ({addClass, task, deleteTask, index}) => {

        return (<div className={`task-block ${addClass}`}>
            <div className='task-block__task'>{task}</div>
            <i className="fa fa-trash" aria-hidden="true" onClick={deleteTask.bind(null, index)}></i>
        </div>
        )
}

export default Task;