import axios from "axios";

const defaultURL = import.meta.env.VITE_BASE_API_URL;

export default axios.create({
  baseURL: defaultURL,
  timeout: 20000,
});
