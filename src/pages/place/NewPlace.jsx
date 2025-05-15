
import { useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { newplace } from "../../api/placeService";

const NewPlace = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [image, setImage] = useState("");
  const [availabilityPeriods, setAvailabilityPeriods] = useState([{ startDate: '', endDate: '' }]); // Start with one availability period
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
        image,
        availabilityPeriods.filter(
        (period) => period.startDate !== '' && period.endDate !== ''
        ), // Filter out incomplete periods
        gestt,
        bedroom,
        price
      );
      navigate("/profile");
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  
  const handleAvailabilityChange = (index, event) => {
    const { name, value } = event.target;
    const newAvailabilityPeriods = [...availabilityPeriods];
    newAvailabilityPeriods[index][name] = value;
    setAvailabilityPeriods(newAvailabilityPeriods);
  };

  const addAvailabilityPeriod = () => {
    setAvailabilityPeriods([...availabilityPeriods, { startDate: '', endDate: '' }]);
  };

  const removeAvailabilityPeriod = (index) => {
    const newAvailabilityPeriods = [...availabilityPeriods];
    newAvailabilityPeriods.splice(index, 1);
    setAvailabilityPeriods(newAvailabilityPeriods);
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
            type="number"
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
          <label htmlFor="image">image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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


         <div className="form-group">
        <label htmlFor="Availability">Availability Periods:</label>
        {availabilityPeriods.map((period, index) => (
          <div key={index}>
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={period.startDate}
              onChange={(e) => handleAvailabilityChange(index, e)}
            />
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={period.endDate}
              onChange={(e) => handleAvailabilityChange(index, e)}
            />
            {availabilityPeriods.length > 1 && (
              <button type="button" onClick={() => removeAvailabilityPeriod(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addAvailabilityPeriod}>
          Add Availability Period
        </button>
      </div>


        <div className="button">
          <Button text="Add New Place" type="submit" variant="auth" />
        </div>
      </form>
    </div>
  );
};

export default NewPlace;
