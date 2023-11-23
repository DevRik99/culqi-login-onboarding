import Axios from "axios";
const http = Axios.create({
  baseURL: "https://fepruebatecnicaculqi-backend-production.up.railway.app/",
});
const token = localStorage.getItem("token");
if (token) {
  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
export default http;
