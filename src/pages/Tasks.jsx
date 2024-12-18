import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import TaskManager from "../components/TaskManager";

const Tasks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="mx-auto px-4 py-4 h-full">
      <div className="px-4 sm:px-8">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <TaskManager searchQuery={searchQuery} />
    </div>
  );
};

export default Tasks;
