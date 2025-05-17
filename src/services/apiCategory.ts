import { ICategoryPayload } from "@/queries/category/ICategory";

import http from "@/config/http";

enum ApiCategory {
  categories = "categories",
}

const getCategoryList = async () => {
  const response = await http({
    method: "get",
    url: ApiCategory.categories,
  });
  return response.data;
};
const getCategoryDetail = async (id: string) => {
  const response = await http({
    method: "get",
    url: `${ApiCategory.categories}/${id}`,
  });
  return response.data;
};
const createCategory = async (data: ICategoryPayload) => {
  const response = await http({
    method: "post",
    url: ApiCategory.categories,
    data,
  });
  return response.data;
};
const updateCategory = async (payload: ICategoryPayload) => {
  const response = await http({
    method: "put",
    url: `${ApiCategory.categories}/${payload.id}`,
    data: {
      data: payload.data,
    },
  });
  return response.data;
};
const deleteCategory = async (id: string) => {
  const response = await http({
    method: "delete",
    url: `${ApiCategory.categories}/${id}`,
  });
  return response.data;
};

export {
  ApiCategory,
  getCategoryList,
  getCategoryDetail,
  createCategory,
  updateCategory,
  deleteCategory,
};
