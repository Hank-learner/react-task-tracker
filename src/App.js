import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'

function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/api/tasks`)
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/api/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks,data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`,{method:'DELETE'})
    setTasks(tasks.filter((task)=> task.id !==id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ?
      {...task, reminder:data.reminder}:task
    ))
  }

  return (
    <Router>
      <div className="container">
        <Header
          onToggleShowAddTask={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />
        <hr className='header-break'></hr>
        <Route path='/' exact render={(props) => (
          <>
            <AddTask
              onAddTask={addTask}
              showAddTask={showAddTask}
            />
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          </>
        )}/>
        <Route path='/about' component={About}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
