import React from 'react';

function TaskItem({task, index, deleteTask, moveTaskUp, moveTaskDown, toggleDone}) {
    return (
        <li key={index} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
            <input className="checkbox" type="checkbox" checked={task.done} onChange={() => toggleDone(index)} />
            <span className="text">{task.name}</span>
            <button className="delete-button" onClick={()=>deleteTask(index)}> Delete</button>
            <button className="move-button" onClick={()=>moveTaskUp(index)}> Up</button>
            <button className="move-button" onClick={()=>moveTaskDown(index)}> Down</button>
        </li>
    );
}

export default TaskItem;
