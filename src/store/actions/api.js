import axios from "axios";
import Axios from "../../services/NetworkService";

// ---->write your api call<----

// testing...
export const getTodo = () => {
  console.log("getTodo api call");
  return Axios.get("/todos/");
};

export const getSingleTodo = () => {
  console.log("getSingleTodo api call");
  return Axios.get("/todos/1");
};

//get all users
export const getUsers = () => {
  return Axios.get("/users/all");
};

//add new user
export const postNewUser = (formData) => {
  return Axios.post(
    "/users",
    formData,
    { headers: { 'content-type': 'multipart/form-data' } }
  );
};

//edit user
export const editUser = (formData, userId) => {
  return Axios.patch(
    `/users/userupdate/${userId}`,
    formData,
    { headers: { 'content-type': 'multipart/form-data' } }
  );
};

//delete user 
export const deleteUser = (userId) => {
  return Axios.delete(`/users/delete/${userId}`);
};
