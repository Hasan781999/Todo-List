import React, { useState } from 'react';
import "./Appstyle.css"

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className='todo-container'>
      <h2 className='todo-header'>To-Do List</h2>
      <input
        type="text"
        className='todo-input'
        placeholder="Add new task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='todo-button' onClick={handleAddTask}>Add Task</button>
      <ul className='todo-list'>
        {tasks.map(task => (
          <li key={task.id} className='todo-item'>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
              className='todo-checkbox'
            />
            <span className='todo-text' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button className='todo-remove' onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

