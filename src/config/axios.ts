import axios from "axios";

const defaultURL = import.meta.env.VITE_BASE_API_URL;

const axiosInstance = axios.create({
  baseURL: defaultURL,
  timeout: 20000,
});

// Interceptor v1
// this used for handling simple interceptor, like no involvement of navigation

// axiosInstance.interceptors.request.use(
//   (config: any) => {
//     const token = useConfigStore.getState().token;
//     const urlParams = new URLSearchParams(window.location.search);
//     const urlToken = urlParams.get("token");
//     if (urlToken) {
//       useConfigStore.setState({ token: urlToken });
//     }

//     // Use the token from the store or from the URL parameters
//     const finalToken = urlToken || token;
//     if (finalToken) {
//       config.headers.Authorization = finalToken;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
