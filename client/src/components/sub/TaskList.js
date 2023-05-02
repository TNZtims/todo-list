import React, { useState } from 'react';
import Task from './Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import './TaskList.css';

function TaskList({ tasks, onCompleteTask, onDeleteTasks, onEditTask, onDelete, isLoading, load }) 
{
    const [isClicked, setIsClicked] = useState(0);

    const handleCompleteClick = (id, task,) => {
        onCompleteTask(id, task);
        setIsClicked(id)
    }

    const handleDeleteClick = () => {
        const shouldDelete = window.confirm('Are you sure you want to delete all completed tasks?');
        if (shouldDelete) {
            let completedTasks = [];
            tasks.map(item => { if(item.status) completedTasks.push(item.id); })
            onDeleteTasks(completedTasks);
        }
    }
    
    const handleEditClick = (id, task) => onEditTask(id, task);
    const handleDeleteClick2 = (id, task) => onDelete(id, task);
    const handleIsLoading = (load) => isLoading(load);

    const activeTasks = tasks.filter((task) => !task.status);

    let clearIcon = <FontAwesomeIcon icon={faTrashCan} />;

    return(
        <div className='todo-list1'>
            {
                tasks.map((item, index) =>
                (
                    <Task
                        key={index}
                        text={item.task}
                        taskId={item.id}
                        completed={item.status}
                        onComplete={() => handleCompleteClick(item.id, {task: item.task, status: !item.status})}
                        onEdit={handleEditClick}
                        forDelete={handleDeleteClick2}
                        onLoading={handleIsLoading}
                        load={load}
                        clickedId={isClicked}
                    />
                )
            )}
            <div className='activeTasks'>{activeTasks.length} Task/s Left</div>
            <button className='otherButton' onClick={handleDeleteClick}>{clearIcon} Clear Completed Tasks</button>
        </div>
    );
}

export default TaskList;