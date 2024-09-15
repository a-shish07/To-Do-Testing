import {  describe, expect, test } from 'vitest';
import {  fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
 
describe('App', () => {
  test('should render input field and add button', () => {
    render(<App />);
    const input = screen.getByRole('textbox', { name: '' });
    const button = screen.getByRole('button', { name: 'Add Task' });
 
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should add task to list when add button is clicked',  async () => {
    const user = userEvent.setup();
    render(<App />); 

    const input = screen.getByRole('textbox', { name: '' });
    const button = screen.getByRole('button', { name: 'Add Task' });
 
    await user.type(input, 'New Task');
    await user.click(button);
 
    await waitFor(() => {
        expect(screen.getByText('New Task')).toBeInTheDocument();
      });
  });
});