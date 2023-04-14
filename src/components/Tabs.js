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
            <button onClick={() => handleTabClick('all')} disabled={activeTab === 'all'}>ALL</button>
            <button onClick={() => handleTabClick('active')} disabled={activeTab === 'active'}>ACTIVE</button>
            <button onClick={() => handleTabClick('completed')} disabled={activeTab === 'completed'}>COMPLETED</button>
            <div>Items Left</div>
        </div>
    );
}

export default Tabs;