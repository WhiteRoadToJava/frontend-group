import axios from "axios";
import "../styles/home.css"
import { useEffect, useState } from "react";

function Home() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadPlacesWithAxios();
    }, []);
    const loadPlacesWithAxios = async () => {
        const result = await axios.get("http://localhost:8080/viewplaces/getallplaces");
        console.log(result.data);
        setPlaces(result.data);
    }

    return (
     <div className="places-content">
          <div className="places-grid">
            {places.length > 0 ? (
              places.map((place) => (
                <div key={place.id} className="place-card">
                  {place.image && (
                    <div className="place-image-container">
                      <img
                        className="place-image"
                        src={place.image}
                        alt={place.name}
                      />
                    </div>
                  )}
                  <div className="place-info">
                    <h3>{place.name}</h3>
                    <p className="description">{place.description}</p>
                    <p className="price">${place.price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-place">No matching place</div>
            )}
            </div>
            </div>
    );
};

export default Home;