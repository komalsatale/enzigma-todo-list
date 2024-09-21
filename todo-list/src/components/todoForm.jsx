


import React, { useState, useEffect } from 'react';
import { addTask, updateTask } from '../services/taskService';
import './TodoForm.css';

const TaskForm = ({ currentTask, onClose, title }) => { 
  const [task, setTask] = useState({
    id: '',
    assignedTo: '',
    status: '',
    dueDate: '',
    priority: '',
    comments: '',
  });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task);
    } else {
      task.id = Math.random();
      addTask(task);
    }
    onClose();
  };

  return (
    <div className="task-form">
      {/* Display the dynamic title passed via props */}
      <h2>{title}</h2> {/* <-- Displaying the title prop */}
      
      <form className="form-content" onSubmit={handleSubmit}>
      {/* <h2>{title}</h2> */}
        <div>
          <label><span style={{color:"red"}}>*</span>Assigned To</label>
          <select
            value={task.assignedTo}
            onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
            required
          >
            <option value="">Select User</option>
            <option value="User 1">User 1</option>
             <option value="User 2">User 2</option>
             <option value="User 3">User 3</option>
             <option value="User 4">User 4</option>
             <option value="User 5">User 5</option>
             <option value="User 6">User 6</option>
             <option value="User 7">User 7</option>
             <option value="User 8">User 8</option>
             <option value="User 9">User 9</option>
             <option value="User 10">User 10</option>
             <option value="User 11">User 11</option>
            {/* Add other users */}
          </select>
        </div>
        <div>
          <label><span style={{color:"red"}}>*</span>Status</label>
          <select
            value={task.status}
            onChange={(e) => setTask({ ...task, status: e.target.value })}
            required
          >
            <option value="">Select Status</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          
          <label>Due Date</label>
          <input
            type="date"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          />
        </div>
        <div>
          <label><span style={{color:"red"}}>*</span>Priority</label>
          <select
            value={task.priority}
            onChange={(e) => setTask({ ...task, priority: e.target.value })}
            required
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={task.comments}
            onChange={(e) => setTask({ ...task, comments: e.target.value })}
          />
        </div>
        <div className='formBtn'>
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
