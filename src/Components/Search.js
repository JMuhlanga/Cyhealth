import React from "react";

function Search({setSearch}) {
  
  function handleSearch (e){
    setSearch(e.target.value);
  }

  return (
    <div className="ui large fluid icon input">
      <input 
      type="text" 
      placeholder="Search For the Country" 
      onChange={handleSearch} 
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;