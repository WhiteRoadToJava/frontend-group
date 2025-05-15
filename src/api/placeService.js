import api from "./axios";

// hämta produkter
export const getAllProducts = async () => {
  const response = await api.get("/viewplaces/getallplaces");
  return response.data;
};

// hämta en produkt med id
export const getPlaceById = async (id) => {
    const response = await api.get(`/viewplaces/getplacebyid/${id}`);
    return response.data;
};

export const deletePlace = async (id) => {
  const response = await api.delete(`/places/deleteplace/${id}`);
  return response;
}

export const getPlacesByOwner = async () => {
  const response = await api.get("/places/getplacesbyowner");
  return response.data;
}

export const newplace = async (name, description, street, postalCode, city, country, latitude, longitude, image, availabilityPeriods, gest, bedrooms, price) => {
  try {
    const response = await api.post("/places/newplace", {
      name,
      description,
      street,
      postalCode,
      city,
      country,
      latitude,
      longitude,
      image,
      availabilityPeriods,
      gest,
      bedrooms,
      price
    });
    return response.data;
  } catch (err) {
    console.log("Error fetchinng newUser: ", err);
  }
};


export const updatePlace = async (id, name, description, street, postalCode, city, country, image, gest, bedrooms, price) => {
  const response = await api.put(`/viewplaces/updateplace/${id}`, {
    name,
    description,
    street,
    postalCode,
    city,
    country,
    image,
    gest,
    bedrooms,
    price,
  });
  return response.data;
}


