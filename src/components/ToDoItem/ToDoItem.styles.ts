import styled from 'styled-components';

export const ToDoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TaskText = styled.span`
  flex: 1;
  margin-right: 10px;
`;

export const TaskInput = styled.input`
  flex: 1;
  padding: 6px;
  margin-right: 10px;
`;

export const EditButton = styled.button`
  padding: 6px 12px;
  background-color: #ffc107;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #e0a800;
  }
`;

export const SaveButton = styled.button`
  padding: 6px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;
