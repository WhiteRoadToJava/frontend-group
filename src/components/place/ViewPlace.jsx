import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewPlace = () => {
  const [place, setPlace] = useState({
    name: "",
    description: "",
    steet: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadPlace();
  }, []);

  try {
    const loadPlace = async () => {
      const response = await axios.get(
        `http://localhost:8080/viewplaces/getplacebyid/${id}`
      );
      setPlace(response.data);
      console.log(response.data);
    };
  } catch (err) {
    console.log("Error fetching place:", error);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Place Details</h2>

          <div className="card">
            <div className="card-header">
              Details of place id :
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: {place.name}</b>
                </li>
                <li className="list-group-item">
                  <b>Description: {place.description}</b>
                </li>
                <li className="list-group-item">
                  <b>Address: {place.steet}</b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/profile"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewPlace;
