import React, { useState } from 'react';
import './Todolist.css';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className='container'>
            <div className='outerBox'>
                <h2 className='text-center'><b>To-Do List</b></h2>
                <div className='AddDoList'>
                    <input className='textBox' type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
                <ol className='lists'>
                    {tasks.map((task, index) => (
                        <li className='listItem' key={index}>
                            {task}
                            <button onClick={() => handleDeleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;
