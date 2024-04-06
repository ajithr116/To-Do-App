import React, {useState, useEffect} from 'react';
import TaskInput from './components/TaskInput.jsx';
import TaskItem from './components/TaskItem';
import ClearButton from './components/ClearButton.jsx';

function ToDoList(){

    const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [{name: "Eat breakfast", done: false}, {name: "walk dog", done: false}];    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
            const updatedTasks = [...tasks, {name: newTask, done: false}];
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setNewTask("");
        }
    }

    function toggleDone(index){
        const updatedTasks = [...tasks];
        updatedTasks[index].done = !updatedTasks[index].done;
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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
                    <TaskItem key={index} task={task} index={index} deleteTask={deleteTask} moveTaskUp={moveTaskUp} moveTaskDown={moveTaskDown} toggleDone={toggleDone} />
                )}
            </ol>
            <ClearButton clearData={clearData}/>
        </div>
    )
}

export default ToDoList;


// import React, {useState} from 'react';
// import ClearButton from './components/ClearButton.jsx';


// function ToDoList(){

//     const [tasks, setTasks] = useState(["Eat breakfast","walk dog"]);
//     const [newTask, setNewTask] = useState("");

//     function handleInputChange(event){
//         setNewTask(event.target.value);
//     }

//     function addTask(){
//         if(newTask.trim()!==""){
//             setTasks(prev => [...prev, newTask]);
//             setNewTask("");
//         }

//     }

//     function deleteTask(index){
//         const updateTasks = tasks.filter((element,i)=>i !== index);
//         setTasks(updateTasks);
//     }

//     function moveTaskUp(index){
//         if(index>0){
//             const updatedTask = [...tasks];
//             [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]];
//             setTasks(updatedTask)
//         }
//     }

//     function moveTaskDown(index){   
//         if(index<tasks.length-1){
//             const updatedTask = [...tasks];
//             [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];
//             setTasks(updatedTask)
//         }
//     }

//     function clearData(){
//         setTasks([])
//     }


//     return (
//         <div className="to-do-list">
//             <h1>To Do List</h1>
//             <div>
//                 <input type="text" placeholder="Enter your task" value={newTask} onChange={handleInputChange}/>
//                 <button className="add-button" onClick={addTask}>Add Task</button>
//             </div>
//             <ol>
//                 {tasks.map((task, index)=>
//                     <li key={index}>
//                         <span className="text">{task}</span>
//                         <button className="delete-button" onClick={()=>deleteTask(index)}> Delete</button>
//                         <button className="move-button" onClick={()=>moveTaskUp(index)}> Up</button>
//                         <button className="move-button" onClick={()=>moveTaskDown(index)}> Down</button>
//                     </li>
//                 )}
//             </ol>
//             <ClearButton clearData={clearData}/>

//         </div>
//     )
// }

// export default ToDoList;