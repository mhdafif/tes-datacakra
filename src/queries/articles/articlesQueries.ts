import {
  UseInfiniteQueryResult,
  UseQueryResult,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { IResponse } from "../IResponse";
import {
  IArticlesListData,
  IArticlesListParams,
  IArticlesPayload,
  IQueryArticlesInfinite,
} from "./IArticles";
import { QryKeyArticles } from "./KArticles";

import {
  createArticles,
  deleteArticles,
  getArticlesDetail,
  getArticlesList,
  updateArticles,
} from "@/services/apiArticles";

import useArticleStore from "@/store/article/articleStore";

const queryLoadArticlesList = (
  params?: IArticlesListParams
): UseQueryResult<IResponse<IArticlesListData[]>> => {
  return useQuery({
    queryKey: [QryKeyArticles.getList],
    queryFn: () => getArticlesList(params),
  });
};
const queryLoadArticlesInfinite =
  (): UseInfiniteQueryResult<IQueryArticlesInfinite> => {
    const params = useArticleStore((state) => state.params);
    return useInfiniteQuery({
      queryKey: [QryKeyArticles.getInfinite, params],
      initialPageParam: params,
      staleTime: 0,
      queryFn: ({ pageParam }) => getArticlesList(pageParam),
      getNextPageParam: (lastPage, pages, params) => {
        const totalItems = pages
          .map((page) => page.data.length)
          .reduce((a, b) => a + b, 0);
        const recordTotals = lastPage?.meta?.pagination.total || 0;

        if (totalItems >= recordTotals) {
          return undefined;
        }
        return {
          ...params,
          pagination: {
            page: params?.pagination?.page + 1,
            pageSize: params?.pagination?.pageSize || 8,
          },
        };
      },
    });
  };
const queryLoadArticlesDetail = (
  id: string
): UseQueryResult<IResponse<IArticlesListData>> => {
  return useQuery({
    queryKey: [QryKeyArticles.getDetail, id],
    queryFn: () => getArticlesDetail(id),
    enabled: !!id,
  });
};
const queryCreateArticles = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QryKeyArticles.create],
    mutationFn: (payload: IArticlesPayload) => createArticles(payload),
    onSuccess: (_data) => {
      queryClient.invalidateQueries({
        queryKey: [QryKeyArticles.getList],
      });
      queryClient.invalidateQueries({
        queryKey: [QryKeyArticles.getInfinite],
      });
      queryClient.invalidateQueries({
        queryKey: [QryKeyArticles.getDetail, _data.id],
      });
    },
  });
};
const queryUpdateArticles = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QryKeyArticles.update],
    mutationFn: (payload: IArticlesPayload) => updateArticles(payload),
    onSuccess: (_data) => {
      queryClient.invalidateQueries({
        queryKey: [QryKeyArticles.getList],
      });
      queryClient.invalidateQueries({
        queryKey: [QryKeyArticles.getInfinite],
      });
      queryClient.removeQueries({
        queryKey: [QryKeyArticles.getDetail, _data.data.documentId],
      });
    },
  });
};
const queryDeleteArticles = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QryKeyArticles.delete],
    mutationFn: (id: string) => deleteArticles(id),
    onSuccess: (_data) => {
      queryClient.invalidateQueries({
        queryKey: [QryKeyArticles.getList],
      });
      queryClient.invalidateQueries({
        queryKey: [QryKeyArticles.getInfinite],
      });
    },
  });
};

export {
  queryLoadArticlesList,
  queryLoadArticlesInfinite,
  queryLoadArticlesDetail,
  queryCreateArticles,
  queryUpdateArticles,
  queryDeleteArticles,
};
