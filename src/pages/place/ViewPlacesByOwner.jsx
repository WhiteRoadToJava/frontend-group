import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getPlacesByOwner } from "../../api/placeService";

import axios from "axios";
const ViewPlacesByOwner = () => {
  const [places, setPlaces] = useState([]);

  let navigate = useNavigate();

  const { id } = useParams();

  const { place, setPlace } = useState({
    name: "",
    description: "",
    street: "",
    postalCode: "",
    city: "",
    country: "",
    latitude: "",
    longitude: "",
    gestt: "",
    bedroom: "",
    price: "",
  });

  useEffect(() => {
    loadPlacesByOwner();
  }, []);

  const loadPlacesByOwner = async () => {
    const result = await getPlacesByOwner();

    setPlaces(result);
    console.log(setPlaces);
  };

  const deletePlace = async (id) => {
    await axios.delete(`http://localhost:8080/places/deleteplace/${id}`);
    console.log("Place delete");
    // loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">address</th>
              <th scope="col">gests</th>
              <th scope="col">bedrooms</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
     {places.map((place) => (
            <tr key={place.id}>
              <th scope="row">{place.name}</th>
              <td>{place.description}</td>
              <td>{place.steet}, {place.postalCode},{place.city}</td>
              <td>{place.gestt}</td>
              <td>{place.bedroom}</td>
              <td>{place.price} sek</td>
              <td>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/viewplace/${place.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-warning mx-2"
                  to={`/editplace/${place.id}`}
                >
                  Edit
           </Link>
           
              </td>
            </tr>
          ))}
          </tbody>   
        </table>
      </div>
    </div>
  );
};
export default ViewPlacesByOwner;
