import React, {useState} from 'react';


function ToDoList(){

    const [tasks, setTasks] = useState(["Eat breakfast","walk dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
            setTasks(prev => [...prev, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index){
        const updateTasks = tasks.filter((element,i)=>i !== index);
        setTasks(updateTasks);
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask)
        }
    }

    function moveTaskDown(index){   
        if(index<tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask)
        }
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" placeholder="Enter your task" value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={()=>deleteTask(index)}> Delete</button>
                        <button className="move-button" onClick={()=>moveTaskUp(index)}> Up</button>
                        <button className="move-button" onClick={()=>moveTaskDown(index)}> Down</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList;
