import useToggleState from "@/hooks/useToggleState";
import { queryLoadArticlesDetail } from "@/queries/articles/articlesQueries";
import { useState } from "react";
import { useParams } from "react-router-dom";

const useArticleDetail = () => {
  /*======================== Props ======================== */

  const params = useParams();

  /*======================== Queries ======================== */

  const { data, isLoading, isRefetching } = queryLoadArticlesDetail(
    params.id as string
  );

  /*======================== UseState ======================== */

  const [formMode, setFormMode] = useState<string>("");
  const [isOpenForm, handleOpenForm] = useToggleState(false);

  /*======================== Handler ======================== */

  const handleForm = (mode: "edit" | "delete") => {
    handleOpenForm();
    setFormMode(mode);
  };
  const handleCloseForm = () => {
    setFormMode("");
    handleOpenForm();
  };

  /*======================== Return ======================== */

  return {
    article: data?.data,
    isLoading: isLoading || isRefetching,
    formMode,
    isOpenForm,
    handleForm,
    handleCloseForm,
  };
};

export default useArticleDetail;
