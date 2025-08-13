import './App.css';
import React from 'react';
function App() {
  return (
    <div class="container">
      <h1 class="heading">To-Do List</h1>
      <div class="my-task">
        <div>
          <h2>My Tasks</h2>
          <p>You have 0 tasks left !</p>
        </div>
        <button class="add-task-btn" onclick="">Add Task</button>  
      </div>
    </div>
  )
}

export default App;
