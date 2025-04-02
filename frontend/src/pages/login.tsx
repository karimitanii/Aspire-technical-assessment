import React, { useState } from "react";
import { login } from "../api/authService";
import { useNavigate, Link } from "react-router-dom"; // ✅ Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Redirect after login

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(formData);
      alert("Login successful!");
      navigate("/business"); // Redirect to dashboard
    } catch (err: any) {
      setError(err.message || "Login failed.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#ADD8E6" }}
    >
      <div
        className="p-5 rounded shadow-lg text-white"
        style={{ backgroundColor: "#000", width: "350px" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign Up!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;