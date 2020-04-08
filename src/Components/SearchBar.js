import React from 'react';

function SearchBar(props) {
  return (
    <div className="search">
      <input id="searchInput" onChange={props.handleSearchInput} value={props.search}></input>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
