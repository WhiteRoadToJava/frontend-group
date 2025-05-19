import React, { useEffect, useState } from "react";
import { getCustomerBooking } from "../../api/BookingService";
import BookingDetails from "./BookingDetails";
import { Link } from "react-router-dom";

const CustomerBooking = () => {
  const [customerBookings, setCustomerBookings] = useState([]);
  useEffect(() => {
    loadBookingByCustomer();
  }, []);


  const loadBookingByCustomer = async () => {
    const result = await getCustomerBooking();
    setCustomerBookings(result);
    console.log(customerBookings);
    };
    
if (!customerBookings || customerBookings.length === 0) {
  return <p className="text-muted">No bookings found for this customer.</p>;
}

    
  return (
    <div className="customer mt-4">
      <h2>Bookings for Customer ID: </h2>
        {customerBookings.map((booking) => (
        <div key={booking.id } className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Booking ID: {booking.id}</h5>
            <p className="card-text">
              <strong>Place:</strong> {booking.place?.name || 'N/A'}
            </p>
            <p className="card-text">
              <strong>Check-in:</strong> {booking.checkInDate}
            </p>
            <p className="card-text">
              <strong>Check-out:</strong> {booking.checkOutDate}
            </p>
            <p className="card-text">
              <strong>Total Amount:</strong> {booking.totalAmount}
            </p>
            {/* You can add more details here if needed */}
            <Link
              className="btn btn-outline-primary btn-sm"
                to={`/booking/${booking.id}`}       
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerBooking;
