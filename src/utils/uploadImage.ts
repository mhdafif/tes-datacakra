import { uploadImage } from "@/services/apiUpload";

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("files", file); // 'files' must match your backend field name

  const response = await uploadImage(formData);
  return response[0];
  // try {
  // } catch () {
  //   console.error("Upload failed:", error);
  // }
};
