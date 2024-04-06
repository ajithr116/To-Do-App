import React from 'react';

function TaskItem({task, index, deleteTask, moveTaskUp, moveTaskDown}) {
    return (
        <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={()=>deleteTask(index)}> Delete</button>
            <button className="move-button" onClick={()=>moveTaskUp(index)}> Up</button>
            <button className="move-button" onClick={()=>moveTaskDown(index)}> Down</button>
        </li>
    );
}

export default TaskItem;
