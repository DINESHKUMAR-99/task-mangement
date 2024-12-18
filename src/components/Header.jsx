import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    console.log("User logged out");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Side: Logo and Links */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Task Manager</h1>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6 ml-auto px-4">
          <Link to="/tasks" className="hover:text-gray-400">
            Tasks
          </Link>
          <Link to="/" className="hover:text-gray-400">
            Profile
          </Link>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="hidden md:block bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu as Bottom Overlay */}
      {isMenuOpen && (
        <nav className="md:hidden fixed w-full bg-gray-700 z-50">
          <ul className="space-y-2 px-4 py-4">
            <li>
              <Link
                to="/tasks"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-gray-400"
              >
                Tasks
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-gray-400"
              >
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogout();
                }}
                className="w-full text-left text-white hover:text-gray-400"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
