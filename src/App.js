import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
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
  const [tasks, setTask] = useState(TASKS);

  const removetaskonclick = (id)=>{
    const updatedtasks = [];
    for (let task of tasks){
      if (task.id !== id){
        updatedtasks.push(task)
      }
    }
    setTask(updatedtasks);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={tasks} onUpdateTask={removetaskonclick}/>
        </div>
      </main>
    </div>
  );
};

export default App;
