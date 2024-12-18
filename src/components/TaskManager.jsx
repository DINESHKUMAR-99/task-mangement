import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskCard from "./TaskCard";
import TaskIcon from "../assets/task-icon.svg";

const TaskManager = ({ searchQuery }) => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const updateTask = (id, updatedData) => {
    const updatedTasks = tasks?.map((task) =>
      task.id === id ? { ...task, ...updatedData } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks?.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  return (
    <div className="h-[calc(100%-58px)] flex flex-col px-4 sm:px-8">
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <h2 className="xs:text-center md:text-left text-xl font-semibold  mb-2 sm:mb-0">
          Task List
        </h2>
        {/* Link to Task Creation Page */}
        <Link
          to="/create-task"
          className="px-3 text-center py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Task
        </Link>
      </div>

      {/* Task List using Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-auto">
        {["Pending", "In Progress", "Completed"]?.map((status) => (
          <div key={status} className="flex flex-col  h-full">
            <h3 className="text-lg font-bold mb-2">{status}</h3>
            <div className="bg-gray-300 flex flex-col gap-4 p-4 rounded-lg sm:hfull lg:h-[calc(100vh-260px)] overflow-auto">
              {filteredTasks?.filter((task) => task?.status === status)
                ?.length > 0 ? (
                filteredTasks
                  ?.filter((task) => task?.status === status)
                  ?.map((task) => (
                    <TaskCard
                      key={task?.id}
                      task={task}
                      updateTask={updateTask}
                      deleteTask={deleteTask}
                    />
                  ))
              ) : (
                <div className="text-center gap-4 flex-col flex items-center justify-center h-full font-bold">
                  <img src={TaskIcon} alt="task-icon" className="h-10 w-10" />
                  <div>No Tasks Found</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
