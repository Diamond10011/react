import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios with `npm install axios`
import { useNavigate } from "react-router-dom";

const Signin = ({ onbClick, onClick }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5223/api/account/login",
        formData
        /* {
          withCredentials: true, 
        } */
      );
      if (response.statusText === "OK") {
        setFormData({
          username: "",
          password: "",
        });
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate("/home");
      }

      // Handle successful login
      console.log("Login successful:", response.data);
      setSuccess("Login successful");
      setError("");
      onClick();

      // Redirect or perform additional actions
    } catch (err) {
      // Handle login error
      console.error(
        "Login error:",
        err.response ? err.response.data : err.message
      );
      setError(
        "Login failed: " + (err.response ? err.response.data : err.message)
      );
      setSuccess("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center   backdrop-blur-sm">
      <div className="w-full max-w-md p-10 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-blue-500 font-bold text-3xl text-center mb-6">
            Sign In
          </h1>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            className="border border-blue-500 mb-4 p-2 w-full rounded"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            className="border border-blue-500 mb-4 p-2 w-full rounded"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <p>Remember Me</p>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full mb-4"
          >
            Sign In
          </button>
          <div className="flex justify-around">
            <button
              onClick={onClick}
              className="ml-2 text-white bg-slate-500 rounded-md p-1 "
            >
              Go Back
            </button>
            <div>
              <p className=" inline">New Here?</p>
              <button onClick={onbClick} className="ml-2 text-blue-500">
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="flex justify-center mt-3 font-bold text-red-600">
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default Signin;
