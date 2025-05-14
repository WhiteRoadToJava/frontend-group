import  { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getPlacesByOwner } from "../../api/placeService";
import EditPlace from "../../components/place/EditPlace";
import ViewPlace from "../../components/place/ViewPlace";
import axios from "axios";
const ViewPlacesByOwzner = () => {
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


   const deletePlace = async(id) => {
      await axios.delete(`http://localhost:8080/deleteUser/${id}`);
      loadUsers();
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
          {places.map((place, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{place.name}</td>
              <td>{place.description}</td>
              <td>
                {place.steet}, {place.postalCode},{place.city}
                  </td>
                  <td>{place.gestt}</td>
                  <td>{place.bedroom}</td>
                  <td>{place.price} sek</td>
                           <td>
            <Link
                    className="btn btn-primary mx-2"
                    to={`/viewplace/${place.id}`}
                  >View</Link>
                <Link className='btn busetn-outline-primary mx-2'
                to={`/editplace/${place.id}`}>Edit</Link>
                <Link className='btn btn-danger mx-2'
                to={deletePlace(place.id)}
                >Delete</Link>
            </td>
            </tr>
          ))};
          ;
        </table>
      </div>
    </div>
  );
};

export default ViewPlacesByOwzner;
