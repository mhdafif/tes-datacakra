import http from "@/config/http";

enum ApiUpload {
  upload = "upload",
}

const uploadImage = async (data: FormData) => {
  const response = await http({
    method: "post",
    url: ApiUpload.upload,
    data,
  });
  return response.data;
};

export { ApiUpload, uploadImage };
