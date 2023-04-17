import React from 'react';
import './TodoList.css';

function Tabs({ onTabChange, activeTab }) 
{
    const handleTabClick = (tab) => 
    {
        onTabChange(tab);
    };

    return(
        <div>
            <button onClick={() => handleTabClick('all')}>ALL</button>
            <button onClick={() => handleTabClick('active')}>ACTIVE</button>
            <button onClick={() => handleTabClick('completed')}>COMPLETED</button>
        </div>
    );
}

export default Tabs;