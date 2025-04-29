import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/button";

const Home = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        loadPlaces();
    }, []);

    const loadPlaces = async () => {
        const result = await axios.get("http://localhost:8080/viewplaces/getallplaces", {
            validateStatus: () => {
                return true;
            }
        }
        );
        if (result.statusa === 302) {
            setPlaces(result.data);
        }
    };
    
    return (
        <div className="home">
            <table>
                <thead>
                    <tr>
                        <th >Id</th>
                    </tr>
                </thead>
                <tbody>
                    {places.map((place, index) => (
                        <tr>
                            <th  key={index}>{index + 1}</th>
                            <th>{place.name}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Home;