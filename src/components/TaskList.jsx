import React, {useState} from 'react'
import TaskForm from './TaskForm';
import TaskCard from './TaskCard';
function TaskList() {
    const [taskCount, setTaskCount] = useState(0);
    const [showTaskForm, setShowTaskForm] = useState(false)
    const [tasks ,setTasks] = useState([]);
    const openTaskForm =()=>{
        setShowTaskForm(true);
    }
    const closeTaskForm =()=>{
        setShowTaskForm(false);
    }
    const formSubmited =(task)=>{
        setTaskCount(taskCount+1);
        setShowTaskForm(false);
        setTasks([...tasks, task]);
    }
  return (
    <div>
        <div className='task-list-container'>
            <h1 className='heading'>To-Do List</h1>
            
            {/* Used Ternary operator to display TaskForm */}
            {
            showTaskForm ? (<TaskForm exitBtn={closeTaskForm} onSubmit={formSubmited}/>):(<div>
                <div className='task-list-content'>
                <div>
                    <h2>My tasks</h2>
                    <p>You have added {taskCount} task !</p>
                </div>
                <div>
                    <button className='add-task-btn' onClick={openTaskForm}>Add Task</button>
                </div>
            </div>
            <div className='list-container'>

                {/* Used Ternary operator to display TaskAdded */}
                {
                taskCount===0 ? 
                (<h3 className='empty-msg'>Add your Tasks !</h3>):
                (<div>{tasks.map((task,index)=>(
                    <TaskCard key={index} task={task}/>
                ))}</div>)
                }

            </div>
            </div>)
            }
        </div>
    </div>
  )
}

export default TaskList;