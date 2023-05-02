import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons'

import TaskForm from './sub/TaskForm';
import Tabs from './sub/Tabs';
import TaskList from './sub/TaskList';

import './TodoList.css';

function TodoList() 
{
    const [tasks, setTasks] = useState([{ id: "", status: 0, task: "" }]);
    const [filter, setFilter] = useState('all');
    const [isLoad, setIsLoad] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/api/todo-list/getAllTasks')
            .then(response =>  {
                setTasks(response.data.data)
            })
            .catch(error => console.log(error));

        setIsLoad(false);
        console.log('rendered!');
    },[shouldUpdate]);

    const handleAddTask = (task) => {
        axios.post('http://localhost:8080/api/todo-list/addTask', task)
            .then(setShouldUpdate(prevState => !prevState))
            .catch(error => console.log(error));
    };  

    const handleCompleteTask = (id, task) => {
        axios.put(`http://localhost:8080/api/todo-list/completeTask/${id}`, task)
            .then(setShouldUpdate(prevState => !prevState))
            .catch(error => console.log(error));
    };

    const handleDeleteTasks = (ids) => {
        axios.delete(`http://localhost:8080/api/todo-list/deleteTasks/${ids}`)
            .then(setShouldUpdate(prevState => !prevState))
            .catch(error => console.log(error));
    };

    const handleEditTask = (id, task) => {
        axios.put(`http://localhost:8080/api/todo-list/completeTask/${id}`, task)
            .then(setShouldUpdate(prevState => !prevState))
            .catch(error => console.log(error));
    }

    const handleDeleteATask = (id, task) => {
        axios.delete(`http://localhost:8080/api/todo-list/deleteTasks/${id}`, task)
            .then(setShouldUpdate(prevState => !prevState))
            .catch(error => console.log(error));
    };

    const handleIsLoading = (load) => setIsLoad(load) ;
    const handleTabChange = (filter) => setFilter(filter);

    let filteredTasks;

    if (filter === 'all') {
        filteredTasks = tasks.filter(task => !task.status);
        tasks.map(task2 => { if(task2.status) filteredTasks.push(task2)})
    }
    else if (filter === 'active')   filteredTasks = tasks.filter(task => !task.status);
    else    filteredTasks = tasks.filter(task => task.status);

    let todoListIcon = <FontAwesomeIcon icon={faListCheck} size="xl" />;

    const refreshPage = () => window.location.reload(false);

    return(
        <div className='todo-list'>
            <h1 onClick={refreshPage}>{todoListIcon} Todo List :</h1>
            <TaskForm onAddTask={handleAddTask} />
            <Tabs 
                onTabChange={handleTabChange} 
                activeTab={filter} 
            /> 
             <TaskList
                tasks={filteredTasks}
                onCompleteTask={handleCompleteTask}
                onDeleteTasks={handleDeleteTasks}
                onEditTask={handleEditTask}
                onDelete={handleDeleteATask}
                isLoading={handleIsLoading}
                load={isLoad}
            /> 
            {isLoad && (<span>loading...</span>)} 
        </div>
    );
}

export default TodoList;
