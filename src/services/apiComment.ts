import { ICommentPayload } from "@/queries/comment/IComment";

import http from "@/config/http";

enum ApiComment {
  comments = "comments",
}

const getCommentList = async () => {
  const response = await http({
    method: "get",
    url: ApiComment.comments,
  });
  return response.data;
};
const getCommentDetail = async (id: string) => {
  const response = await http({
    method: "get",
    url: `${ApiComment.comments}/${id}`,
  });
  return response.data;
};
const createComment = async (data: ICommentPayload) => {
  const response = await http({
    method: "post",
    url: ApiComment.comments,
    data,
  });
  return response.data;
};
const updateComment = async (payload: ICommentPayload) => {
  const response = await http({
    method: "put",
    url: `${ApiComment.comments}/${payload.id}`,
    data: {
      data: payload.data,
    },
  });
  return response.data;
};
const deleteComment = async (id: string) => {
  const response = await http({
    method: "delete",
    url: `${ApiComment.comments}/${id}`,
  });
  return response.data;
};

export {
  ApiComment,
  getCommentList,
  getCommentDetail,
  createComment,
  updateComment,
  deleteComment,
};
