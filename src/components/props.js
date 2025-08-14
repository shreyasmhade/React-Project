import React, {useState} from 'react'

function MyTask(props) {
    const [taskCount, setCount] = useState(0)
    const increment =()=>{
        setCount(taskCount + 1);
    }

  return (
    <div class="my-task">
        <div>
          <h2>My Tasks</h2>
          <p>You have {taskCount} tasks left !</p>
        </div>
        <button className="add-task-btn" onClick={increment}>Add Task</button>  
      </div>
  )
}

export default MyTask ;