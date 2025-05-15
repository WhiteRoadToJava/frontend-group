import React, { useEffect, useState } from "react";
import { getPlaceById, updatePlace } from "../../api/placeService";
import { useParams, useNavigate, Link } from "react-router-dom"; // استيراد useNavigate لإعادة التوجيه

const EditPlace = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState({
    name: "",
    description: "",
    street: "",
    postalCode: "",
    city: "",
    country: "",
    image: "",
    gestt: "",
    bedroom: "",
    price: "",
  });

  useEffect(() => {
    loadPlace();
  }, [id]); // إعادة التحميل عند تغير id

  const loadPlace = async () => {
    try {
      const response = await getPlaceById(`${id}`);
      setPlace(response);
    } catch (err) {
      console.log("Error fetching place: " + err);
      // يمكنك هنا عرض رسالة خطأ للمستخدم بدلاً من رمي الخطأ
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePlace(
        `${id}`,
        place.name,
        place.description,
        place.street,
        place.postalCode,
        place.city,
        place.country,
        place.image,
        place.gestt,
        place.bedroom,
        place.price
      );
      console.log("Place updated successfully!");
      navigate("/viewplacesbyowner"); // إعادة التوجيه بعد التحديث
    } catch (error) {
      console.log("error update Place: ", error);
      // يمكنك هنا عرض رسالة خطأ للمستخدم
    }
  };

  const handleInputChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value });
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit Place</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={place.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="description">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={place.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="street">
            Street
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            name="street"
            value={place.street}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="postalCode">
            Postal Code
          </label>
          <input
            type="text"
            className="form-control"
            id="postalCode"
            name="postalCode"
            value={place.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="city">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={place.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="country">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={place.country}
            onChange={handleInputChange}
            required
          />
        </div>
        {/*} <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="image">Image URL</label>
          <input type="text" className="form-control" id="image" name="image" value={place.image} onChange={handleInputChange} />
        </div> */}
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="image">
            اImage URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            onChange={handleInputChange} // تغيير إلى معالج ملفات مختلف
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="gestt">
            Guests
          </label>
          <input
            type="number"
            className="form-control"
            id="gestt"
            name="gestt"
            value={place.gestt}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="bedroom">
            Bedrooms
          </label>
          <input
            type="number"
            className="form-control"
            id="bedroom"
            name="bedroom"
            value={place.bedroom}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={place.price}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-outline-warning mx-2">
          Update Place
        </button>
        <Link className="btn btn-outline-primary mx-2" to="/profile">
          Back To My Profile
        </Link>
      </form>
    </div>
  );
};

export default EditPlace;
