import React from 'react'
import { FaTrash ,FaEdit } from "react-icons/fa";
function TaskCard({task}) {
  return (
    <div >
        <div className='card-container'>
            
        <div>
            <input type="checkbox" />
            <h3>{task.title}</h3>
        </div>
        <div>
            <button><FaEdit /></button>
            <button><FaTrash /></button>
        </div>
        </div>
    </div>
  )
}

export default TaskCard;