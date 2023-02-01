import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import axios from 'axios';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    axios.get("https://task-list-api-c17.herokuapp.com/tasks")
      .then((response)=>{
        let tasks = response.data.map(task => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.is_complete,
          };
        });
        setTasks(tasks);
      })
      .catch((error)=>{console.log("got error")})
  }, []);

  const removetaskonclick = (id)=>{
    const updatedtasks = [];
    for (let task of tasks){
      if (task.id !== id){
        updatedtasks.push(task)
      }
    }
    setTasks(updatedtasks);  
  }

  const updatetaskonclick = (updatedtask)=>{
    const updatedtasks = tasks.map(task =>{
      if (task.id === updatedtask.id){
        return updatedtask;
      }else{
        return task;
      }
    });
    setTasks(updatedtasks);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={tasks} onUpdateTask={updatetaskonclick} removeTask={removetaskonclick}/>
        </div>
      </main>
    </div>
  );
};

export default App;
