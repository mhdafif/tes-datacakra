// this interceptor is used for handling the token expired case and make it logout (like ultragift / ulfa)

// import { mainAxios } from "./axios";

// import useGlobalStore from "@/store/Global";
// import useUserStore from "@/store/User";

// // let apiToRefresh: any[] = [];

// // const handleApiRefresh = (item: any) => {
// //   apiToRefresh.push(item);
// // };

// // const onRefreshed = (token: any) => {
// //   apiToRefresh.map((item) => item(token));
// // };

// const setup = () => {
//   mainAxios.interceptors.request.use(
//     (config: any) => {
//       const token = useUserStore.getState().getUser()?.token;
//       if (token) {
//         config.headers["authorization"] = token;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   mainAxios.interceptors.response.use(
//     (response) => {
//       // const config = response.config;
//       // retry error api caused by token changed
//       // if (config.url === "api/auth/login" && apiToRefresh.length > 0) {
//       //   const token = response.data.data.token;
//       //   onRefreshed(token);
//       //   apiToRefresh = [];
//       // }
//       return response;
//     },
//     (error) => {
//       const originalConfig = error.config;

//       if (
//         error.response.status === 401 &&
//         !originalConfig.url.includes("auth/login")
//       ) {
//         localStorage.setItem("isExpired", "true");
//         useUserStore.getState().logout();
//         // useGlobalStore.getState().setAuth({ isOpen: true, type: "login" });
//         // useGlobalStore.getState().setSnackbar({
//         //   isOpen: true,
//         //   message: "season-expired",
//         //   isMultilang: true,
//         //   isError: true,
//         // });
//         // only for get method
//         // if (originalConfig.method === "get") {
//         //   const retryReq = new Promise((resolve) => {
//         //     handleApiRefresh((token: any) => {
//         //       originalConfig.headers["authorization"] = token;
//         //       resolve(axiosInstance(originalConfig));
//         //     });
//         //   });
//         //   if (useGlobalStore.getState().loading) {
//         //     useGlobalStore.getState().setLoading(false);
//         //   }
//         //   return retryReq;
//         // }
//       } else {
//         useGlobalStore.getState().setSnackbar({
//           isOpen: true,
//           message: error.response.data.meta.message || "wrong-contact-admin",
//           isMultilang: error.response.data.meta.message ? false : true,
//           isError: true,
//         });
//       }

//       return Promise.reject(error);
//     }
//   );
// };
// export default setup;
