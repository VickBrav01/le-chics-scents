import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userSchema } from "./FormValidation";
import Axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const credentials = { email, password };

    userSchema
      .validate(credentials)
      .then((data) => {
        Axios.post("http://localhost:3000/users/login", data).then(
          (response) => {
            if (response.data.token) {
              setModalOpen(true);
              setTimeout(() => {
                navigate("/Product");
              }, 3000);
              console.log(response.data);
            } else {
              alert("Wrong Credentials");
            }
          }
        );
      })
      .catch((error) => {
        alert("Wrong Credentials");
        console.error("Error logging in:", error);
      });
  };

  return (
    <div>
      <div className="login-overlay">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="form-title">LOGIN</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">Login</button>
            <p>Don't have an account?</p>
            <Link to="/Signup" className="login-link">
              Sign Up
            </Link>
          </div>
        </form>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Login Successful!</h3>
            <p>You will be redirected to the homepage shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
