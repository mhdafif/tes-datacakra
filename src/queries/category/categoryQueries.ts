import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { IResponse } from "../IResponse";
import { ICategoryListData, ICategoryPayload } from "./ICategory";
import { QryKeyCategory } from "./KCategory";

import {
  createCategory,
  deleteCategory,
  getCategoryDetail,
  getCategoryList,
  updateCategory,
} from "@/services/apiCategory";

const queryLoadCategoryList = (): UseQueryResult<
  IResponse<ICategoryListData[]>
> => {
  return useQuery({
    queryKey: [QryKeyCategory.getList],
    queryFn: getCategoryList,
  });
};
const queryLoadCategoryDetail = (
  id: string
): UseQueryResult<ICategoryListData> => {
  return useQuery({
    queryKey: [QryKeyCategory.getDetail, id],
    queryFn: () => getCategoryDetail(id),
    enabled: !!id,
  });
};
const queryCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QryKeyCategory.create],
    mutationFn: (payload: ICategoryPayload) => createCategory(payload),
    onSuccess: (_data) => {
      queryClient.invalidateQueries({
        queryKey: [QryKeyCategory.getList],
      });
      queryClient.invalidateQueries({
        queryKey: [QryKeyCategory.getDetail, _data.id],
      });
    },
  });
};
const queryUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QryKeyCategory.update],
    mutationFn: (payload: ICategoryPayload) => updateCategory(payload),
    onSuccess: (_data) => {
      queryClient.invalidateQueries({
        queryKey: [QryKeyCategory.getList],
      });
      queryClient.invalidateQueries({
        queryKey: [QryKeyCategory.getDetail, _data.id],
      });
    },
  });
};
const queryDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QryKeyCategory.delete],
    mutationFn: (id: string) => deleteCategory(id),
    onSuccess: (_data) => {
      queryClient.invalidateQueries({
        queryKey: [QryKeyCategory.getList],
      });
    },
  });
};

export {
  queryLoadCategoryList,
  queryLoadCategoryDetail,
  queryCreateCategory,
  queryUpdateCategory,
  queryDeleteCategory,
};
