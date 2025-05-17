import useToggleState from "@/hooks/useToggleState";
import { queryLoadArticlesInfinite } from "@/queries/articles/articlesQueries";
import useInfiniteScroll from "react-infinite-scroll-hook";

const useArticles = () => {
  /*======================== Queries ======================== */

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = queryLoadArticlesInfinite();
  const articles = data?.pages.map((page) => page.data).flat() || [];

  /*======================== UseState ======================== */

  const [isOpenAdd, handleOpenAdd] = useToggleState(false);

  /*======================== Others ======================== */

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading || isFetchingNextPage,
    hasNextPage,
    onLoadMore: fetchNextPage,
    disabled: !!error,
    rootMargin: "0px 0px 50px 0px",
  });

  /*======================== Return ======================== */

  return {
    isLoading,
    articles,
    isFetchingNextPage,
    hasNextPage,
    isOpenAdd,
    sentryRef,
    handleOpenAdd,
  };
};

export default useArticles;
