import { useState } from "react"
import Header from './component/Header'
import Tasks from './component/Tasks';
import AddTask from './component/AddTask';


const  App = () => {
  
  const [showAddTask, setShowAddTask] = useState
  (false)
 
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'take stinky out for a walk ',
        day:'Feb 5th at 5:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'go for shoping ',
        day:'May 10th at 5:30pm',
        reminder: false,
    },
    {
        id:3,
        text: 'hot bom birthday',
        day:'Sep 19th at 12:00am',
        reminder: true,
    },
])
//   Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
   const newTask= { id, ...task }
   setTasks([...tasks, newTask ])
  }

// Delete task
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !== id ))
}

// Toggle Remionder 

const toogleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id 
  ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toogleReminder}/> : 'NO Task To Show'}
    </div>
  );
}

export default App;
