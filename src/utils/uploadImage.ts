import { uploadImage } from "@/services/apiUpload";

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("files", file);

  const response = await uploadImage(formData);
  return response[0];
};
