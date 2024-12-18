import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    status: "Pending",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Extract taskId from query parameters
    const queryParams = new URLSearchParams(location.search);
    const taskId = queryParams.get("taskId");

    if (taskId) {
      // Fetch the task from localStorage and set it in the formData state
      const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const taskToEdit = existingTasks.find(
        (task) => task.id === parseInt(taskId)
      );

      if (taskToEdit) {
        setFormData({
          title: taskToEdit.title,
          status: taskToEdit.status,
        });
      }
    }
  }, [location.search]); // Re-run this effect when the URL changes

  // Single handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from input
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the state dynamically based on the input's name
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData?.title == "") {
      setError("Please Enter the title");
    }

    if (!formData.title.trim()) return;

    // Extract taskId from query parameters
    const queryParams = new URLSearchParams(location.search);
    const taskId = queryParams.get("taskId");

    // Fetch existing tasks from localStorage
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    if (taskId) {
      // Update existing task
      const updatedTasks = existingTasks.map((task) =>
        task.id === parseInt(taskId) ? { ...task, ...formData } : task
      );

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } else {
      // Create a new task
      const newTask = { id: Date.now(), ...formData };
      const updatedTasks = [newTask, ...existingTasks];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    // Navigate back to task list page
    navigate("/tasks");
  };

  return (
    <div className="items-center flex justify-center h-full p-8">
      <div className="max-w-md mx-auto p-4 bg-white border rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {location.search ? "Edit Task" : "Create a Task"}
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Task Title */}
          <input
            type="text"
            name="title" // Use "name" to match the formData property
            placeholder="Task Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-4 border rounded"
          />
          {error && formData.title == "" && (
            <p className="text-red-500 w-[28rem] text-sm mb-3">{error}</p>
          )}

          {/* Task Status */}
          <select
            name="status" // Use "name" to match the formData property
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-4 border rounded bg-white"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition"
          >
            {location.search ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
