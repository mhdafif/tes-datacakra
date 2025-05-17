import axios from "./axios";

type IMethod = "get" | "post" | "put" | "patch" | "delete";
const http = async ({
  url = "" as string,
  params = {} as any,
  method = "get" as IMethod,
  data = {},
  headers = {},
  auth = undefined as any,
}) => {
  return await axios({
    url,
    method,
    params,
    data,
    headers,
    auth,
  });
};

export default http;
