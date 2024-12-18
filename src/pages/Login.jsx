import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded user credentials
  const validUser = {
    email: "dineshkumar@gmail.com",
    password: "Dinesh@123",
    name: "Dinesh Kumar",
    token: "mock-token",
  };

  const handleLogin = () => {
    if (email === validUser.email && password === validUser.password) {
      // Successful login
      const mockUser = { email: validUser.email, name: validUser.name, token: validUser.token };
      localStorage.setItem("user", JSON.stringify(mockUser));
      setError("");
      navigate("/");
    } else {
      // Failed login
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        
        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-3 border rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
