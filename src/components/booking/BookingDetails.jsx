import React, { useEffect, useState } from 'react';
import { getBookingDetails } from '../../api/BookingService';
import { useParams } from 'react-router-dom';

function BookingDetails() {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState();

   useEffect(() => {
    loadBookingByCustomer();
  }, []);

 const loadBookingByCustomer = async () => {
      const result = await getBookingDetails(`${id}`);
      setBookingData(result);
      console.log(setBookingData);
  };
  
  

    if (!bookingData) {
    return <p className="text-muted">No booking data available.</p>;
  }
  return (
    <div className="container mt-4">
      <h2>Booking Details</h2>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Booking ID:</h5>
          <p className="card-text">{id}</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">Booking Details</div>
        <div className="card-body">
          <p className="card-text">
            <strong>Check-in Date:</strong> {bookingData.checkInDate}
          </p>
          <p className="card-text">
            <strong>Check-out Date:</strong> {bookingData.checkOutDate}
          </p>
          <p className="card-text">
            <strong>Number of Guests:</strong> {bookingData.guests}
          </p>
          <p className="card-text">
            <strong>Total Amount:</strong> {bookingData.totalAmount}
          </p>
          <p className="card-text">
            <strong>Created At:</strong> {bookingData.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;