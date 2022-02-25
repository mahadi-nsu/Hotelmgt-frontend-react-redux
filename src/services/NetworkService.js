import axios from "axios";

const instance = axios.create({
  baseURL: "https://mahadi-hotel-mgt.herokuapp.com",
  //   timeout: 2500,
});

export default instance;
