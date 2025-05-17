import {
  IArticlesListParams,
  IArticlesPayload,
} from "@/queries/articles/IArticles";

import http from "@/config/http";

enum ApiArticles {
  articles = "articles",
}

const getArticlesList = async (params?: IArticlesListParams) => {
  const response = await http({
    method: "get",
    url: ApiArticles.articles,
    params,
  });
  return response.data;
};
const getArticlesDetail = async (id: string) => {
  const response = await http({
    method: "get",
    url: `${ApiArticles.articles}/${id}`,
  });
  return response.data;
};
const createArticles = async (data: IArticlesPayload) => {
  const response = await http({
    method: "post",
    url: ApiArticles.articles,
    data,
  });
  return response.data;
};
const updateArticles = async (payload: IArticlesPayload) => {
  const response = await http({
    method: "put",
    url: `${ApiArticles.articles}/${payload.id}`,
    data: {
      data: payload.data,
    },
  });
  return response.data;
};
const deleteArticles = async (id: string) => {
  const response = await http({
    method: "delete",
    url: `${ApiArticles.articles}/${id}`,
  });
  return response.data;
};

export {
  ApiArticles,
  getArticlesList,
  getArticlesDetail,
  createArticles,
  updateArticles,
  deleteArticles,
};
