import "./SignUp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userSchema } from "./FormValidation";
import Axios from "axios";

function SignUp() {
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    userSchema
      .validate(signUp)
      .then((data) => {
        console.log(data);
        Axios.post("http://localhost:3000/users", data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="modal">
          <div className="modal-content">
            <h2>SIGN UP</h2>

            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <button type="submit" onSubmit={() => navigate("./Login")}>
                Sign Up
              </button>
              <p>Already have an account?</p>
              <Link to="/Login" className="login-link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
