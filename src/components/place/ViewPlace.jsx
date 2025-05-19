import  { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { deletePlace, getPlaceById, } from "../../api/placeService";
import NewBooking from "../booking/NewBooking";


const ViewPlace = () => {
  const img1 = "../../images/me1.jpg";
  const navigate = useNavigate();
  const [place, setPlace] = useState({
    name: "",
    description: "",
    steet: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadPlace();
  }, []);

  const loadPlace = async () => {
    try {
      const response = await getPlaceById(`${id}`);
      setPlace(response);
    } catch (err) {
      console.log("Error fetching place: " + err);
      throw err;
    }
  };
  {
    /* this method is t*/
  }
  const loadPlace1 = async () => {
    const response = await axios.get(
      `http://localhost:8080/viewplaces/getplacebyid/${id}`
    );
    setPlace(response.data);
    console.log(response.data);
  };

  const deletePlaceByOwner = async () => {
    const isConfirmed = window.confirm("Are you sure than you want to delete this place")
    if (isConfirmed) {
      try {
        const response = await deletePlace(`${id}`);
      } catch (err) {
        console.log("Error fetching place: " + err);
        throw err;
      }
        navigate("/viewplacesbyowner")
    }
  };
  

  return (
    <div className="container">
      <h1>Place Details</h1>
      <div className="place-info">
        <p>
          <strong>Name: </strong>
          {place.name}
        </p>
        <p>
          <strong>Description: </strong>
          {place.description}
        </p>
        <p>
          <strong>Address: : </strong>
          {place.street}, {place.postalCode}, {place.city}, {place.country}
        </p>
        <p>
          <strong>Gest Number: </strong>
          {place.gestt} gest you can invated.
        </p>
        <p>
          <strong>Bedrooms: </strong>
          {place.bedroom}
        </p>
        <p>
          <strong>Price: </strong>
          {place.price} per night
        </p>
      </div>
      <div className="img container">
        <div>
          {place.image ? (
            <img src={place.image} alt={place.name} />
          ) : (
            <p>
              <strong>No image available</strong>
            </p>
          )}
        </div>
      </div>
      <div className="button">
        <button className="btn btn-outline-danger mx-2 " onClick={deletePlaceByOwner}>Delete</button>
        <Link className="btn btn-outline-warning mx-2 " to={`/editplace/${id}`}>Update</Link>

        
      {/* إضافة نموذج الحجز هنا ليتم عرضه دائمًا */}
      <NewBooking placeId={id} />
      </div>
      <div className="button">
        <Link className="btn btn-outline-primary mx-2" to="/profile">
          Back To My Profile
        </Link>

      </div>
    </div>
  );
};

export default ViewPlace;
