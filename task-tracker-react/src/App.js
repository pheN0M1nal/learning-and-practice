import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import './App.css';

import { useState } from "react"





const App = () => {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Having Tea',
        day: 'Feb 6th at 10:30pm',
        reminder: true
    },
    {
        id:2,
        text: 'Playing Badminton',
        day: 'Aug 10th at 7:30pm',
        reminder: true
    }
   ])


const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }
  

  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }


  const addTask= (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'Hurraay!! No Tasks ...'
      )
      }
    </div>
  );
}

export default App;
