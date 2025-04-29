import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import Button from "../components/Button";
import "../styles/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // konsumerar contexten
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
      navigate("/");
    } catch (err) {
      console.log("error: " + err);
    }
  };

  return (
    <div class="login-container">
    <h2>Login</h2>
    <form id="loginForm" onSubmit={handleSubmit}>
        <div class="form-group">
            <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}

          />
        </div>
        <div className="form-group">
            <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          
          />
        </div>
        <button type="submit">Log In</button>
        <div id="errorMessage" class="error-message"></div>
    </form>
</div>
    
  );
};

export default Login;
