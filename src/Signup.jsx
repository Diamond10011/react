import React, { useState } from "react";
import axios from "axios";

const Signup = ({ onbClick, onClick }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5223/api/account/register",
        formData,
        /* {
          withCredentials: true,
        } */
      );

      // Handle successful signup
      console.log("Signup successful:", response);
      setSuccess("Signup successful");
      setError("");
      onClick();
        navigate("/signin");
      

      // Redirect or perform additional actions
    } catch (err) {
      // Handle signup error
      console.error(
        "Signup error:",
        err.response ? err.response.data : err.message
      );
      setError(
        "Signup failed: " + (err.response ? err.response.data : err.message)
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
            Sign Up
          </h1>
          <input
            type="text"
            name="username"
            className="border border-blue-500 mb-4 p-2 w-full rounded"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="border border-blue-500 mb-4 p-2 w-full rounded"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="border border-blue-500 mb-4 p-2 w-full rounded"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className="border border-blue-500 mb-4 p-2 w-full rounded"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <p>Remember Me</p>
          </div>

          <button
            // onClick={props.onClick}
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full mb-4"
          >
            Sign up
          </button>

          <div className="flex justify-around">
            <button
              onClick={onClick}
              className="ml-2 text-white bg-slate-500 rounded-md p-1 "
            >
              Go Back
            </button>
            <div>
              <p className=" inline">Already have a Account?</p>
              <button onClick={onbClick} className="ml-2 text-blue-500">
                Sign In
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

export default Signup;

