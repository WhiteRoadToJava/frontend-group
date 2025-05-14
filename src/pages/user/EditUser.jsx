import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios"; // على الرغم من أن updateuser قد تستخدمه داخليًا
import { getUser, updateuser } from "../../api/userService";
import Button from "../../components/Button";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

    const loadUser = async () => {
        try {
            const response = await getUser();
            setUser(response); // أو setUser(response.data) بناءً على بنية الاستجابة
            console.log(response);
        } catch (error) {
            console.error("Error loading user:", error);
            // يمكنك هنا إضافة معالجة للخطأ مثل عرض رسالة للمستخدم
        }
    };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateuser( firstName,lastName,email,phone,address); // تمرير الـ ID وكائن user
      navigate("/profile");
    } catch (err) {
      console.error("error updating user:", err);
      // يمكنك هنا إضافة معالجة للخطأ مثل عرض رسالة للمستخدم
    }
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={user.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={user.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Your Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="phone">
            Phone
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="phone"
            id="phone"
            required
            value={user.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="address">
            Address
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="address"
            id="address"
            required
            value={user.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <Button
              text="Edit User"
              type="submit"
              className="btn btn-outline-success btn-lg"
              variant="auth"
            />
          
          </div>

          <div className="col-sm-2">
            <Link
              to={"/profile"}
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;