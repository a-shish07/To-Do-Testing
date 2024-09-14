import React, { useState } from 'react';
import { SearchBoxWrapper, SearchInput, SearchButton } from './SearchBox.styles';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <SearchBoxWrapper>
      <SearchInput 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search tasks..." 
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBoxWrapper>
  );
};

export default SearchBox;
