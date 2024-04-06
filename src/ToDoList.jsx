import React, {useState, useEffect} from 'react';
import TaskInput from './components/TaskInput.jsx';
import TaskItem from './components/TaskItem';
import ClearButton from './components/ClearButton.jsx';

function ToDoList(){

    const initialTasks = JSON.parse(localStorage.getItem('tasks')) || ["Eat breakfast","walk dog"];
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((element,i)=>i !== index);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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

    function clearData(){
        localStorage.removeItem('tasks');
        setTasks([])
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <TaskInput newTask={newTask} handleInputChange={handleInputChange} addTask={addTask} />
            <ol>
                {tasks.map((task, index)=>
                    <TaskItem key={index} task={task} index={index} deleteTask={deleteTask} moveTaskUp={moveTaskUp} moveTaskDown={moveTaskDown} />
                )}
            </ol>
            <ClearButton clearData={clearData}/>
        </div>
    )
}

export default ToDoList;
