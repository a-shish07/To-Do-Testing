import React, { useState } from 'react';
import {
  ToDoItemWrapper,
  TaskText,
  DeleteButton,
  EditButton,
  SaveButton,
  TaskInput,
} from './ToDoItem.styles';

interface ToDoItemProps {
  task: string;
  onDelete: () => void;
  onUpdate: (newTask: string) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    onUpdate(editedTask);
    setIsEditing(false);
  };

  return (
    <ToDoItemWrapper>
      {isEditing ? (
        <TaskInput
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        <TaskText>{task}</TaskText>
      )}
      {isEditing ? (
        <SaveButton onClick={handleSave}>Save</SaveButton>
      ) : (
        <>
          <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </>
      )}
    </ToDoItemWrapper>
  );
};

export default ToDoItem;
