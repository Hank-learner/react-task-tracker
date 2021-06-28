const TasksUtil = (WrappedComponent) => {


    return (props) => {
        const fetchTasks = async () => {
            const res = await fetch(`http://localhost:5000/tasks`)
            const data = await res.json()
            return data
        }

        const fetchTask = async (id) => {
            const res = await fetch(`http://localhost:5000/tasks/${id}`)
            const data = await res.json()
            return data
        }

        const addTask = async (task) => {

            const res = await fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(task)
            })

            const data = await res.json()
            props.setTasks([...props.tasks, data])
            // console.log(task)
            // const id = Math.floor(Math.random() * 10000) + 1
            // const newTask = { id, ...task }
            // setTasks([...tasks, newTask])
        }

        const deleteTask = async (id) => {
            await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
            props.setTasks(props.tasks.filter((task) => task.id !== id))
        }

        const toggleReminder = async (id) => {
            const taskToToggle = await fetchTask(id)
            const updTask = {
                ...taskToToggle,
                reminder: !taskToToggle.reminder
            }

            const res = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updTask)
            })

            const data = await res.json()
            props.setTasks(props.tasks.map((task) => task.id === id ?
                { ...task, reminder: data.reminder } : task
            ))
        }

        return (
            <WrappedComponent
                {...props}
                tasks={props.tasks}
                onAddTask={addTask}
                onDelete={deleteTask}
                onToggle={toggleReminder}
            />
        )
    }

}

export default TasksUtil
