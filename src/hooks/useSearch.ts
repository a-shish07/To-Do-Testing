import { useState } from 'react';

export const useSearch = (tasks: string[]) => {
  const [results, setResults] = useState<string[]>([]);

  const searchTasks = (query: string) => {
    const filtered = tasks.filter((task) => task.toLowerCase().includes(query.toLowerCase()));
    setResults(filtered);
  };

  return { results, searchTasks };
};
