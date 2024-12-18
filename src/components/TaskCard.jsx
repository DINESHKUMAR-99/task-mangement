import React from "react";
import DeleteIcon from "../assets/delete-icon.svg";
import EditIcon from "../assets/edit-icon.svg";
import { Link, useNavigate } from "react-router-dom";

const TaskCard = ({ task, updateTask, deleteTask }) => {
  const navigate = useNavigate();
  const handleDelete = (task) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(task?.id);
      
    }
  };
  return (
    <div className="border p-4 rounded shadow flex bg-white items-center">
      <div className="font-semibold text-base">{task?.title}</div>

      <div className="flex ml-auto">
        <Link
          className="text-white px-2 py-1 rounded ml-auto"
          to={`/create-task?taskId=${task?.id}`}
        >
          <img src={EditIcon} alt="edit-icon" />
        </Link>
        <button
          onClick={() => handleDelete(task)}
          className="text-white px-2 py-1 rounded"
        >
          <img src={DeleteIcon} alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
