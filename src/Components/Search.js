import React from "react";
import "./Search.css";

const Search = ({ setInputText, setFilter }) => {
  const handleChangeFilterByName = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="Search">
      <input
        className="Input"
        placeholder="  Search"
        onChange={(e) => handleChangeFilterByName(e)}
      ></input>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="Show all">Show all</option>
        <option value="Task toDo">Task toDo</option>
        <option value="Task complited">Task complited</option>
      </select>
    </div>
  );
};

export default Search;
