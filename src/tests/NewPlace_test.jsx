import React, { useState } from 'react';

function NewPlace() {
  const [street, setStreet] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [imageUrls, setImageUrls] = useState(['']); // Start with one input for image URL
  const [image, setImage] = useState('');
  const [gest, setGest] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [price, setPrice] = useState('');
  const [availabilityPeriods, setAvailabilityPeriods] = useState([{ startDate: '', endDate: '' }]); // Start with one availability period
  const [placeType, setPlaceType] = useState('');

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleImageUrlChange = (index, event) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = event.target.value;
    setImageUrls(newImageUrls);
  };

  const addImageUrlField = () => {
    setImageUrls([...imageUrls, '']);
  };

  const removeImageUrlField = (index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);
    setImageUrls(newImageUrls);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      street,
      postalCode,
      city,
      country,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      imageUrl: imageUrls.filter(url => url !== ''), // Filter out empty URLs
      image,
      gest: parseInt(gest),
      bedrooms: parseInt(bedrooms),
      price: parseFloat(price),
      availabilityPeriods: availabilityPeriods.filter(
        (period) => period.startDate !== '' && period.endDate !== ''
      ), // Filter out incomplete periods
      placeType,
    };
    console.log('Form Data:', formData);
    // Here you would typically send this formData to your backend API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Street:</label>
        <input type="text" value={street} onChange={(e) => handleInputChange(e, setStreet)} />
      </div>
      <div>
        <label>Postal Code:</label>
        <input type="text" value={postalCode} onChange={(e) => handleInputChange(e, setPostalCode)} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={city} onChange={(e) => handleInputChange(e, setCity)} />
      </div>
      <div>
        <label>Country:</label>
        <input type="text" value={country} onChange={(e) => handleInputChange(e, setCountry)} />
      </div>
      <div>
        <label>Latitude:</label>
        <input type="number" step="any" value={latitude} onChange={(e) => handleInputChange(e, setLatitude)} />
      </div>
      <div>
        <label>Longitude:</label>
        <input type="number" step="any" value={longitude} onChange={(e) => handleInputChange(e, setLongitude)} />
      </div>

      <div>
        <label>Image URLs:</label>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <input
              type="text"
              value={url}
              onChange={(e) => handleImageUrlChange(index, e)}
            />
            {imageUrls.length > 1 && (
              <button type="button" onClick={() => removeImageUrlField(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addImageUrlField}>
          Add Image URL
        </button>
      </div>

      <div>
        <label>Image (single URL):</label>
        <input type="text" value={image} onChange={(e) => handleInputChange(e, setImage)} />
      </div>

      <div>
        <label>Guests:</label>
        <input type="number" value={gest} onChange={(e) => handleInputChange(e, setGest)} />
      </div>
      <div>
        <label>Bedrooms:</label>
        <input type="number" value={bedrooms} onChange={(e) => handleInputChange(e, setBedrooms)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" step="any" value={price} onChange={(e) => handleInputChange(e, setPrice)} />
      </div>

      <div>
        <label>Availability Periods:</label>
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

      <div>
        <label>Place Type:</label>
        <input type="text" value={placeType} onChange={(e) => handleInputChange(e, setPlaceType)} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default NewPlace;