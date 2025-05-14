import React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { newplace } from "../../api/placeService";

const NewpPlace = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [gestt, setGestt] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await newplace(
        name,
        description,
        street,
        postalCode,
        city,
        country,
        latitude,
        longitude,
        gestt,
        bedroom,
        price
      );
      navigate("/profile");
    } catch (err) {
      console.log("Error: " + err);
    }
  };
  return (
    <div className="container" style={{ width: "40rem", margin: "2rem" }}>
      <h2>Add New Place</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalcode">Postal-Code</label>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gest">Gests </label>
          <input
            type="number"
            value={gestt}
            onChange={(e) => setGestt(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bedroom">Bedrooms</label>
          <input
            type="number"
            value={bedroom}
            onChange={(e) => setBedroom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="button">
          <Button text="Register" type="submit" variant="auth" />
        </div>
      </form>
    </div>
  );
};

export default NewpPlace;
