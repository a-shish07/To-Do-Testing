import React, { useState } from 'react';
import { useToDo } from '../hooks/useToDo';
import Input from '../components/Input/Input';
import ToDoItem from '../components/ToDoItem/ToDoItem';
import { updateTask } from '../store/todoSlice';


const ToDoPage: React.FC = () => {
  const { tasks, addTask, deleteTask } = useToDo();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="New task..." />
      <button onClick={handleAddTask} >Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <ToDoItem task={task} onDelete={() => deleteTask(index)}  onUpdate={() => updateTask}/>
            {/* <ToDoItem task={task} onUpdate={() => updateTask(index)} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoPage;
