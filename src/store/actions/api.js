import axios from "axios";
import Axios from "../../services/NetworkService";

//get all users
export const getUsers = () => {
  return Axios.get("/users/all");
};

//add new user
export const postNewUser = (formData) => {
  return Axios.post("/users", formData, {
    headers: { "content-type": "multipart/form-data" },
  });
};

//edit user
export const editUser = (formData, userId) => {
  return Axios.patch(`/users/userupdate/${userId}`, formData, {
    headers: { "content-type": "multipart/form-data" },
  });
};

//delete user
export const deleteUser = (userId) => {
  return Axios.delete(`/users/delete/${userId}`);
};
