
import React from 'react';

const SearchBar = ({ query, setQuery }) => (
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search for books..."
  />
);

export default SearchBar;



