import React from 'react'

const SearchBar = ({ searchText, setSearchText, searchIcon }) => {
  return (
    <div
    style={{
      margin: 30,
      justifyContent: "center",
      fontFamily: "sans-serif",
      display: "flex",
      alignItems: "center",
    }}
  >
    <span style={{ fontSize: 20 }}>{searchIcon}</span>
    <input placeholder="Character Name"
      style={{
        margin: 10,
        width: "90%",
        height: 30,
        border: "3px solid cyan",
      }}
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  </div>
);
};

export default SearchBar;

