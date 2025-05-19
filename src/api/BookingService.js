import api from "./axios"
export const newBooking = async (bookingData) => {
  try {
    const response = await api.post("/bookings", bookingData);
    return response.data;
  } catch (error) {
    console.error("Booking API error:", error);
    throw error; 
    }
};


export const getBookingDetails = async (id) => {
  try {
    const response = await api.get(`/bookings/findById/${id}`);
    console.log(response.data)
    return response.data;
    
  } catch (error) {
    console.log("the getting of customer's booking : " + error);
  }
};
export const getCustomerBooking = async () => {
  try {
    const response = await api.get("/bookings/getUserBooking");
    console.log(response.data)
    return response.data;
    
  } catch (error) {
    console.log("the getting of customer's booking has a error: " + error);
  }
  
};
