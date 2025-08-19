import React, {useState} from 'react'
import { FaTimes } from "react-icons/fa";

function TaskForm({exitBtn ,onSubmit}) {
    const [title,setTitle] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        const newTask ={title}
        onSubmit(newTask)
        setTitle('')
    }
  return (
    <div>
        <div className='form-header'>
                <h2>Add Task</h2>
                <button className='exit-btn' onClick={exitBtn}>
                    <FaTimes />
                </button>
            </div>
        <form className='task-form' onSubmit={handleSubmit}>
            <h3>Title</h3>
            <input type='text' className='input-element' placeholder='Enter the title...' 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required/>
            {/* <h3>Discription</h3>
            <textarea />
            <h3>Deadline</h3>
            <input type='date'/> */}
            <br></br>
            <div>
                <button className='submit-btn' type='submit'>Done</button>
            </div>
        </form>
    </div>
  )
}

export default TaskForm;