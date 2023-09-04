import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/login', {
        email,
        password,
      });

      setMessage(response.data.message);

      // Clear email and password fields upon successful login
      if (response.status === 200) {
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      // Handle different types of errors
      if (error.response) {
        // HTTP error (e.g., 400 Bad Request)
        setMessage("Login Failed: " + error.response.data.message);
      } else if (error.message) {
        // Network error
        setMessage("Network Error: " + error.message);
      } else {
        // Other unexpected errors
        setMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email/Phone:</label>
          <input
            className="form-control"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email/Mobile no"
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-control"
            type="text" // Change to password type
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          />
        </div>

        <button className="btn btn-primary w-25" type="submit">
          Submit
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
};

export default LoginPage;
