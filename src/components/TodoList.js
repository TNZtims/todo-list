import React, { useState } from 'react';
import './TodoList.css';
import TaskForm from './TaskForm';
import Tabs from './Tabs';
import TaskList from './TaskList';

function TodoList() 
{
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    const handleAddTask = (task) => 
    {
        setTasks([...tasks, task]);
    };

    const handleCompleteTask = (index) => 
    {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const handleDeleteTasks = () => 
    {
        const newTasks = tasks.filter((task) => !task.completed);
        setTasks(newTasks);
    };

    const handleTabChange = (filter) => 
    {
        setFilter(filter);
    };

    const filteredTasks = filter === 'all'  
    ? tasks : filter === 'active'
    ? tasks.filter((task) => !task.completed)
    : tasks.filter((task) => task.completed);

    return(
        <div className='todo-list'>
            <h1>Todo List :</h1>
            <TaskForm onAddTask={handleAddTask} />
            <Tabs onTabChange={handleTabChange} activeTab={filter} />
            <TaskList
                tasks={filteredTasks}
                onCompleteTask={handleCompleteTask}
                onDeleteTasks={handleDeleteTasks}
            />
        </div>
    );
}

export default TodoList;

