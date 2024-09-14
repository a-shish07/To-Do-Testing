import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../store/todoSlice';
import { RootState } from '../store/store';
import Input from './Input/Input';
import ToDoItem from './ToDoItem/ToDoItem';

const ToDoApp: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const tasks = useSelector((state: RootState) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    dispatch(deleteTask(index));
  };

  const handleUpdateTask = (index: number, newTaskValue: string) => {
    dispatch(updateTask({ index, newTask: newTaskValue }));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <Input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <ToDoItem
              task={task}
              onDelete={() => handleDeleteTask(index)}
              onUpdate={(newTaskValue) => handleUpdateTask(index, newTaskValue)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
