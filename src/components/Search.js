import React from "react";

function Search({ setSearchTerm }) { // one prop: 'setSearchTerm'
  function handleInputChange(e) { //defines function to update search term when value of input field changes
    setSearchTerm(e.target.value)
  }


  return (  //renders searchBar
    <div className="searchbar"> 
      <label htmlFor="search">Search Plants 🔍:</label>
      <input            // renders input field to type to search for plants
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleInputChange} // set to call 'handleInputChange' when input value changes
      />
    </div>
  );
}

export default Search;
