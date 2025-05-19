import React, { useState } from 'react';
import { newBooking } from '../../api/BookingService'; // path till metoden som kör data hantering i dataabaset.

const NewBooking = ({ placeId }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1); // det är ett primiär värde.

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookingData = {
        placeId: placeId,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        guests: parseInt(guests, 10),
      };
      console.log('Booking Data:', bookingData);
      await newBooking(bookingData); // 
      alert('Booking is added');
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Booking is not added. there is a error : ');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Your Stay</h2>
      <div>
        <label htmlFor="checkInDate">Check-in Date:</label>
        <input
          type="date"
          id="checkInDate"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="checkOutDate">Check-out Date:</label>
        <input
          type="date"
          id="checkOutDate"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default NewBooking;