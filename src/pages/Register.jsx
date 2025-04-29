import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/Button";
import "../styles/auth.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // konsumerar contexten
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(username, password);
      navigate("/login");
    } catch (err) {
      console.log("error: " + err);
    }
  };

  return (
    <div className="container" style={{ width: "40rem", margin: "2rem" }}>
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button">
          <Button text="Register" type="submit" variant="auth" />
        </div>
      </form>
    </div>
  );
};

export default Register;
