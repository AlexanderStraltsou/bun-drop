import React from "react";

function SearchBar({ filterItems }) {
  return (
    <div className="flex-container justify-center">
      <input
        onInput={(e) => {
          filterItems(e.target.value);
        }}
        className="searchbar"
        type="text"
      />
    </div>
  );
}

export default SearchBar;