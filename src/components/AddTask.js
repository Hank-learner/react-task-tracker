import { useState } from 'react'

const AddTask = ({ onAddTask, showAddTask }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please add task')
            return
        }
        onAddTask({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
            showAddTask ? (
                <form className='add-form' onSubmit={onSubmit} >
                    <div className='form-control'>
                        <label htmlFor='new-task-title'>Enter Task</label>
                        <input
                            id='new-task-title'
                            type='text'
                            placeholder='Add Task'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-control'>
                        <label>Day & Time</label>
                        <input
                            type='text'
                            placeholder='Add Day & Time'
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        />
                    </div>
                    <div className='form-control form-control-check'>
                        <label>Set Reminder</label>
                        <input
                            type='checkbox'
                            checked={reminder}
                            value={reminder}
                            onChange={(e) => setReminder(e.currentTarget.checked)}
                        />
                    </div>
                    <input
                        type='submit'
                        className='btn btn-block'
                        value='Save Task'
                />
                </form >
            ):(null) 
    )
};

export default AddTask
