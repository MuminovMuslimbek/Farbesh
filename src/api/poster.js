import axios from "axios";

const instance = axios.create({
  baseURL: "https://farbesh.up.railway.app/",
  timeout: 10000,
});

export default instance;
