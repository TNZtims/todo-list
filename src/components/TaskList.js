import React from 'react';
import './TaskList.css';
import Task from './Task';


function TaskList({ tasks, onCompleteTask, onDeleteTasks }) 
{
    const handleCompleteClick = (index) => 
    {
        onCompleteTask(index);
    };

    const handleDeleteClick = () => 
    {
        onDeleteTasks();
    };

    return(
        <div className='todo-list1'>
            {tasks.map((task, index) => 
            (
                <Task
                    key={index}
                    text={task.text}
                    completed={task.completed}
                    onComplete={() => handleCompleteClick(index)}
                />
            ))}
            <button onClick={handleDeleteClick}>Clear Completed</button>
        </div>
    );
}

export default TaskList;