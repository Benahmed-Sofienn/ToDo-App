import React, { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import Search from "./Components/Search";

function App() {
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredListTask, setFilteredListTask] = useState([]);
  console.log(filter);
  return (
    <div className="App">
      <AddTask />
      <Search setInputText={setInputText} setFilter={setFilter} />
      <ListTask
        inputText={inputText}
        filter={filter}
        setFilter={setFilter}
        filteredListTask={filteredListTask}
        setFilteredListTask={setFilteredListTask}
      />
    </div>
  );
}

export default App;
