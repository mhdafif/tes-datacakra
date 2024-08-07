// Interceptor v2
// this interceptor is used for handling the token expired case and has refresh token (like cats-client-dashboard)
// also this can refresh failed request when token is refreshed

// import { Location, NavigateFunction } from "react-router-dom";

// // import useUserStore from "../store/User/Index";
// import axiosInstance from "./axios";

// let loadingRefresh = false;
// const apiToRefresh: any[] = [];

// const handleApiRefresh = (item: any) => {
//   apiToRefresh.push(item);
// };

// const onRefreshed = (token: any) => {
//   apiToRefresh.map((item) => item(token));
// };

// const setup = (navigate: NavigateFunction, location: Location) => {
//   axiosInstance.interceptors.request.use(
//     (config: any) => {
//       // const token = useUserStore.getState().getUser()?.accessToken;
//       // if (token) {
//       //   config.headers["authorization"] = token; // for Node.js Express back-end
//       // }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   axiosInstance.interceptors.response.use(
//     (res) => {
//       return res;
//     },
//     (err) => {
//       const originalConfig = err.config;
//       if (originalConfig.url !== "/login" && err.response) {
//         // Access Token was expired
//         if (
//           err.response.status === 401 &&
//           !originalConfig._retry &&
//           originalConfig.url !== "/refresh-token"
//         ) {
//           originalConfig._retry = true;
//           if (!loadingRefresh) {
//             loadingRefresh = true;
//             // axiosInstance
//             //   .patch(
//             //     "/refresh-token",
//             //     {},
//             //     {
//             //       headers: {
//             //         refresh_token:
//             //           useUserStore.getState().getUser().refreshToken || "",
//             //       },
//             //     }
//             //   )
//             //   .then((res) => {
//             //     const { accessToken, refreshToken } = res.data.data;
//             //     useUserStore.getState().setUser({
//             //       accessToken,
//             //       refreshToken,
//             //     });
//             //     loadingRefresh = false;
//             //     onRefreshed(accessToken);
//             //   })
//             //   .catch((error) => {
//             //     return Promise.reject(error);
//             //   });
//           }
//           const retryReq = new Promise((resolve) => {
//             handleApiRefresh((token: any) => {
//               originalConfig.headers["authorization"] = token;
//               resolve(axiosInstance(originalConfig));
//             });
//           });
//           return retryReq;
//         } else if (
//           (err.response.data.errors[0].code === "UNA001" ||
//             err.response.data.errors[0].code === "CLE009") &&
//           originalConfig.url === "/refresh-token"
//         ) {
//           // useUserStore.getState().logout();
//           navigate("/login", { state: { from: location }, replace: true });
//         }
//       }
//       return Promise.reject(err);
//     }
//   );
// };
// export default setup;
