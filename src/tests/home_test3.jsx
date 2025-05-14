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
        <div className="place-grid">
            {places.map(place => (
                <div key={place.id} className="place-item">
            {place.imageURL && <img src={place.imageURL[0]}/>}
            <h3>{place.name}</h3>
            <p>{place.price} $</p>
            <p>{place.nights} </p>
        </div>
        ))}
    </div>
    );
}

export default Home;