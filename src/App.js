import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 12:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Grocery shopping",
      day: "Feb 7th at 4:00pm",
      reminder: true,
    },
  ]);

  // Delete a Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000);
    const newTask = {id, ...task};
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      { showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show!"
      )}
    </div>
  );
}

export default App;
