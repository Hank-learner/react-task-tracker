import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        tasks.length > 0 ? (
            <>
                <h4>Tasks</h4>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
                ))}
            </>) : ('No Tasks to show')
    )
}

export default Tasks
