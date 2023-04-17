import React, { useState } from 'react';
import './TodoList.css';

function TaskForm({ onAddTask }) 
{
    const [text, setText] = useState('');

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        onAddTask({ text, completed: false });
        setText('');
    };
    

    return(
        <div>What needs to be done?
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TaskForm;