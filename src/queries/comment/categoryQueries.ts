import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { IResponse } from "../IResponse";
import { ICommentListData, ICommentPayload } from "./IComment";
import { QryKeyComment } from "./KComment";

import {
  createComment,
  deleteComment,
  getCommentDetail,
  getCommentList,
  updateComment,
} from "@/services/apiComment";

const queryLoadCommentList = (): UseQueryResult<
  IResponse<ICommentListData[]>
> => {
  return useQuery({
    queryKey: [QryKeyComment.getList],
    queryFn: getCommentList,
  });
};
const queryLoadCommentDetail = (
  id: string
): UseQueryResult<ICommentListData> => {
  return useQuery({
    queryKey: [QryKeyComment.getDetail, id],
    queryFn: () => getCommentDetail(id),
    enabled: !!id,
  });
};
const queryCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QryKeyComment.create],
    mutationFn: (payload: ICommentPayload) => createComment(payload),
    onSuccess: (_data) => {
      queryClient.invalidateQueries({
        queryKey: [QryKeyComment.getList],
      });
      queryClient.invalidateQueries({
        queryKey: [QryKeyComment.getDetail, _data.id],
      });
    },
  });
};
const queryUpdateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QryKeyComment.update],
    mutationFn: (payload: ICommentPayload) => updateComment(payload),
    onSuccess: (_data) => {
      queryClient.invalidateQueries({
        queryKey: [QryKeyComment.getList],
      });
      queryClient.invalidateQueries({
        queryKey: [QryKeyComment.getDetail, _data.id],
      });
    },
  });
};
const queryDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QryKeyComment.delete],
    mutationFn: (id: string) => deleteComment(id),
    onSuccess: (_data) => {
      queryClient.invalidateQueries({
        queryKey: [QryKeyComment.getList],
      });
    },
  });
};

export {
  queryLoadCommentList,
  queryLoadCommentDetail,
  queryCreateComment,
  queryUpdateComment,
  queryDeleteComment,
};
