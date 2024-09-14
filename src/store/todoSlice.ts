import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
  tasks: string[];
}

interface UpdateTaskPayload {
  index: number;
  newTask: string;
}

const initialState: TodoState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload, 1);
    },
    updateTask: (state, action: PayloadAction<UpdateTaskPayload>) => {
      const { index, newTask } = action.payload;
      if (index >= 0 && index < state.tasks.length) {
        state.tasks[index] = newTask;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;
