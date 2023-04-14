import React from 'react';
import './Task.css';

function Task({ text, completed, onComplete }) 
{
    return(
        <div className='tasks'>
            <input type="checkbox" checked={completed} onChange={onComplete} />
            <span style={{ textDecoration: completed ? '' : 'none' }}>{text}</span>
        </div>
    );
}

export default Task;