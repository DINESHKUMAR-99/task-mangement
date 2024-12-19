import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Fetch user name from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name || "Guest";

  const handleLogout = () => {
    // Clear localStorage and navigate to home or login page
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* Profile Content */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {userName}!</h1>
        <button
          onClick={()=>navigate('/create-task')}
          className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Profile;
