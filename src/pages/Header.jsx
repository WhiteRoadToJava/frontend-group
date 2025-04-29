import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Logo from "../icons/Logo";
import User from "../icons/User";
import "../styles/header.css";

// om man är inloggad som user - visa länk till profil dölj login + register länk + visa logout
// om man är inloggad som admin - visa länk till admin dashboard dölj login + register + visa logout
// om man inte är inloggad - visa länk till login och register dölj logout

const Header = () => {
  // vi behöver logout funktionen från context
  // vi behöver currentUser så vet om det finns nån user inloggad + kolla rollen på user
  const { currentUser, logout } = useAuth();

  // logga ut funktion
  const handleLogout = async () => {
    await logout();
  };

  // vi behöver kolla vilken roll usern har
  const isAdmin =
    currentUser && currentUser.roles && currentUser.roles.includes("ADMIN");

  return (
    <header className="header">
      <Logo />
      <nav className="navigation">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Essentials
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              About us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="auth-controls">
        {isAdmin && (
          <Link className="link" to="/admin">
            <p className="admin">Dashboard</p>
          </Link>
        )}

        {currentUser ? (
          <>
            {!isAdmin && (
              <Link className="link" to="/profile">
                <User />
              </Link>
            )}
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="link" to="/login">
              Login
            </Link>
            <Link className="link" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
