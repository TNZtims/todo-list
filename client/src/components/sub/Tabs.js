import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'

function Tabs({ onTabChange, activeTab }) {

    const handleTabChange = (event) => onTabChange(event.target.value);

    let filterIcon = <FontAwesomeIcon icon={faRectangleList} size="lg" />;

    return (
        <div>
            <span className='filterText'>{filterIcon}</span>
            <select className='comboBox' value={activeTab} onChange={handleTabChange}>
                <option value='all'>ALL</option>
                <option value='active'>ACTIVE</option>
                <option value='completed'>COMPLETED</option>
            </select>
        </div>
    );
}

export default Tabs;
