import React from 'react';

function TaskInput({newTask, handleInputChange, addTask}) {
    return (
        <div>
            <input type="text" placeholder="Enter your task" value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TaskInput;
