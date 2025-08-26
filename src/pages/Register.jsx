import { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< Updated upstream:src/pages/Register.jsx
import { useAuth } from "../hooks/useAuth";
import Button from "../components/Button";
import "../styles/auth.css";
=======
import { useAuth } from "../../hooks/useAuth";
import Button from "../../components/Button";
import "../../styles/auth.css";
import Toast from "../../components/Toast";
>>>>>>> Stashed changes:src/pages/user/Login.jsx

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // konsumerar contexten
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
<<<<<<< Updated upstream:src/pages/Register.jsx
      await register(username, password);
      navigate("/login");
=======
      await login(username, password);
      navigate("/");
      handleShowToast("success", "Login successful");
      handleHideToast();
>>>>>>> Stashed changes:src/pages/user/Login.jsx
    } catch (err) {
      console.log("error: " + err);
      handleShowToast("error", "Login failed");
      handleHideToast();
    }
  };

  const [toast, setToast] = useState({
    show: false,
    type: "",
    text: "", 
  });
  const handleShowToast = (type, text) => {
    setToast({
      show: true,
      type,
      text,
    });
  };
const handleHideToast = () => {
  setToast({
    show: false,
    type: "",
    text: "",
  });
};


  return (
<<<<<<< Updated upstream:src/pages/Register.jsx
    <div className="container" style={{ width: "40rem", margin: "2rem" }}>
      <h2>Register</h2>
=======
    <>
        <div className="container" style={{ width: "40rem", margin: "2rem" }}>
      <h2>Login</h2>
>>>>>>> Stashed changes:src/pages/user/Login.jsx
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
    <Toast show={toast.show} type={toast.type} text={toast.text} onHide={handleHideToast} />
</>

  );
};

export default Register;
