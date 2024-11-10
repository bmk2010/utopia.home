import axios from "axios";

const request = axios.create({
  baseURL: "https://672ccda7fd89797156404315.mockapi.io/api",
  headers: { "Content-Type": "application/json" },
});

export default request;
