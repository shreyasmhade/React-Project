import "./App.css";
import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaTimes } from "react-icons/fa";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  const handleAdd = (e) => {
    setTodos([...todos, { todo, completed: false }]);
    setTodo("");
    e.preventDefault();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheck = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditText(todos[index].todo);
  };

  const handleSaveEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].todo = editText;
    setTodos(updatedTodos);
    setEditingIndex(-1);
    setEditText("");
  };

  const handleCancelEdit = () => {
    setEditingIndex(-1);
    setEditText("");
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((item, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>To-Do List</h1>
          <p className="counter">{todos.length}</p>
        </div>
        <div>
          <form onSubmit={handleAdd} className="input-container">
            <input
              placeholder="Add your task ..."
              onChange={handleChange}
              value={todo}
              required
            />
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="todo-list-container">
          {todos.length === 0 ? (
            <h3 className="empty-msg">You have not added any task yet!</h3>
          ) : (
            <div>
              {todos.map((item, index) => (
                <div className="todos-list" key={index}>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={item.completed}
                    onChange={() => handleCheck(index)}
                  />
                  
                  {editingIndex === index ? 
                  (
                    <>
                      <input
                        type="text"
                        className="edit-input"
                        value={editText}
                        onChange={handleEditChange}
                        autoFocus
                      />
                      <div>
                        <button
                          className="todo-btn"
                          onClick={() => handleSaveEdit(index)}
                        >
                          <FaSave />
                        </button>
                        <button
                          className="todo-btn"
                          onClick={handleCancelEdit}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </>
                  ) : 
                  (
                    <>
                      <h3
                        className={item.completed ? "check-todo" : "not-check-todo"}
                      >
                        {item.todo}
                      </h3>
                      <div>
                        <button
                          className="todo-btn"
                          onClick={() => handleEdit(index)}
                          disabled={item.completed}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="todo-btn"
                          onClick={() => handleDelete(index)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <footer>Designed By Shreyas Mhade</footer>
      </div>
    </div>
  );
}

export default App;