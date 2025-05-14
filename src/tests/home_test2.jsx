import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


const Home = () => {
    const [students, setStudents] = useState({
        name: "",
        username: "",
        email: "",
      });
    
    
      useEffect(() => {
        loadUser();
      }, []);
    
      const loadUser = async () => {
        const result = await axios.get("http://localhost:8080/viewplaces/getallplaces");
        setStudents(result.data);
      };
    
    return (
        <div className='card-group'>
        <div className="col">
<div className="card h-100">
<img src="..." className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">This is a short card.</p>
</div>
</div>
</div>
      </div>
   
    );
}



export default Home;
