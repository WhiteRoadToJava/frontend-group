import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa6';

import { getAllUsers } from "../../api/AdminService"
import axios from 'axios';

const AdminDashboard1 = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        loadUsers();
    }, []);


    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8080/admin/showallusers");
      setUsers(result.data);
      console.log(users.data);
      
    }
  return (
   <section>
              <table>
                <thead>
                    <tr>
                        <th >Id</th>
                    </tr>
                </thead>
                <tbody>
             
                </tbody>
            </table>
    </section>
  )
}

export default AdminDashboard1
