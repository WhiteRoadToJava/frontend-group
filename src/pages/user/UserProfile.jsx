
import { useAuth } from "../../hooks/useAuth";
import "../../styles/profile.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  // Assuming useAuth provides logout and currentUser
  // Adjust the import path according to your project structure
  const { logout, currentUser } = useAuth();

  // Function to handle logout
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="container">
  
    </div>
  );
};

export default UserProfile;
