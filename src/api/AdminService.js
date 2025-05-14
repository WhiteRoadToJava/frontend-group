import axios from "axios";

import React from 'react'

export const getAllUsers = async () => {
    try {
        const users = await api.get("/admin/showallusers");
        console.log(users.data);
        return users.data;
    } catch (err) {
        console.log("Error fething: ", err);
    };
};


