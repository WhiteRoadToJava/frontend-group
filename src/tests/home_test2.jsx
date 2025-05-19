import React, { useState } from "react";
import { newBooking } from "../../api/BookingService"; // تأكد من صحة المسار

const NewBookingForm = ({ placeId }) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1); // قيمة افتراضية لعدد الضيوف

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookingData = {
        placeId: placeId,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        guests: parseInt(guests, 10),
      };
      console.log("Booking Data:", bookingData);
      await newBooking(bookingData); // يفترض أن newBooking يستقبل كائنًا

      // يمكنك إضافة منطق إضافي هنا بعد الحجز الناجح، مثل عرض رسالة أو إعادة التوجيه
      alert("تم الحجز بنجاح!");
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("حدث خطأ أثناء محاولة الحجز.");
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

export default NewBookingForm;
