import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons'

function TaskForm({ onAddTask }) 
{
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (text.trim() !== '') {
          onAddTask({ task: text });
          setText('');
        }
    };

    let addTodoIcon = <FontAwesomeIcon icon={faPlus} size="xl" bounce />;
    let questionMarkIcon = <FontAwesomeIcon icon={faQuestion} shake />;

    return(
        <div>What needs to be done{questionMarkIcon}
            <form className='form' onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={e => setText(e.target.value)} />
                <button className='addButton' type="submit">{addTodoIcon} ADD</button>
            </form>
        </div>
    );
}

export default TaskForm;