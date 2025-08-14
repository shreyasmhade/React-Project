import './App.css';
import React from 'react';
import MyTask from './components/props';
function App() {

  return (
    <div class="container">
      <h1 class="heading">To-Do List</h1>
      <MyTask taskCount="0"/>
    </div>
  )
}

export default App;
