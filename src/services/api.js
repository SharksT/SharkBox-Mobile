import axios from "axios";

const api = axios.create({
  baseURL: "https://backendproj1.herokuapp.com"
});

export default api;
