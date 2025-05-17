import { queryLoadArticlesList } from "@/queries/articles/articlesQueries";
import { useEffect, useMemo, useState } from "react";

const useHome = () => {
  /*======================== UseState ======================== */

  const [page, setPage] = useState(1);
  const pageSize = 4; // Assuming a default page size of 4

  /*======================== Queries ======================== */

  const {
    data: dataArticlesList,
    isLoading,
    isRefetching,
    refetch,
  } = queryLoadArticlesList({
    pagination: {
      page,
      pageSize,
    },
  });

  const hasNextPage = useMemo(() => {
    if (!dataArticlesList) return false;
    return (dataArticlesList.meta?.pagination?.total || 0) > page * pageSize;
  }, [dataArticlesList]);

  /*======================== Handler ======================== */

  const handlePage = (value: number) => {
    setPage(value);
  };

  /*======================== UseEffect ======================== */

  useEffect(() => {
    refetch();
  }, [page]);

  /*======================== Return ======================== */

  return {
    page,
    articles: dataArticlesList?.data || [],
    loadingArticles: isLoading || isRefetching,
    hasNextPage,
    handlePage,
  };
};

export default useHome;
