import api from "./axios"

export const getUserById = async (id) => {
    const response = await api.get("/userUpdate");
    return response.data;
};


// i need to get the user information.
export const getUser = async () => {
    try {
        const response = await api.get("/user/viewuser");
        return response.data;
    } catch (err) {
        console.log("Error fetching user ", err)
        throw err;
    }
};

export const updateuser = async (firstName,lastName,email,phone,address) => {
    
    try {
        const response = await api.put("/user/userUpdate",{
        firstName,
        lastName,
        email,
        phone,
        address,
      });
        return response.data;
    } catch (err) {
        console.log("Error fetching user ", err)
        throw err;
    }
};


export const deleteuser = async () => {
    try {
        const response = await api.delete("/user/userDelete");
        console.log(response.data);
    } catch (err) {
        console.log("Error delete user: ", err);
    }
};