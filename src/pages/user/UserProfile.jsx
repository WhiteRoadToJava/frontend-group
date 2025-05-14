import api from "../../api/axios";
import { getUser } from "../../api/userService";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/profile.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { logout, currentUser } = useAuth();

  /*  const [user, setUser] = useState({
    address: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    created_at: "",
  });
 */
  /*   useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await getUser();
    setUser(response);
    console.log(response);
  }; */

  // vi behöver logout funktionen från context
  // vi behöver currentUser så vet om det finns nån user inloggad + kolla rollen på user

  // logga ut funktion
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="container shadow">
      <div className="main ">
        <div className="topbar">
          <Link className="link" onClick={handleLogout}>
            Logout
          </Link>
          <Link className="link">Delete </Link>
          <Link className="link" to="/editUser">
            Edit
          </Link>
          <Link className="link" to="#user-info">
            Home
          </Link>
        </div>
        <div className="row" id="user-info">
          <div className="col-md-4 mt-1">
            <div className="card text-center sidebar">
              <div className="card-body">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h3>{currentUser.userName}</h3>
                  <Link className="link" to="/newplace">
                    New Place
                  </Link>
                  <Link className="link" to="/viewplacesbyowner">
                    My Places
                  </Link>
                  <a href="">Suppor</a>
                  <a href="">Setting</a>
                  <a href="">Signout</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-1">
            <div className="card mb-3 content">
              <h1 className="m-3 pt-3">About</h1>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Full Name</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    {currentUser.firstName} {currentUser.lastName}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    {currentUser.email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Phone</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    {currentUser.phone}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <h5>Address</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    {currentUser.address}
                  </div>
                </div>
                {/*   <div className="row">
                  <div className="col-md-3">
                    <h5>Date:</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    {currentUser.created_at}
                  </div>
                </div> */}
              </div>
            </div>
            <div className="card mb-3 content">
              <h1 className="m-3">Recent Project</h1>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Project Name</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    Project Description
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
