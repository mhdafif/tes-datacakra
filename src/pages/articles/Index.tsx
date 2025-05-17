import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

import ArticleCard from "@/components/ArticleCard";

import ModalArticle from "@/modules/articles/modal/ModalArticle";
import useArticles from "@/modules/articles/useArticles";

const Articles = () => {
  /*======================== Props ======================== */

  const { t } = useTranslation();
  const {
    isLoading,
    articles,
    isFetchingNextPage,
    hasNextPage,
    isOpenAdd,
    sentryRef,
    handleOpenAdd,
  } = useArticles();

  /*======================== Return ======================== */

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-darkGray capitalize">
          {t("menu.articles")}
        </h1>
        <div
          className="bg-white hover:bg-gray-100 transition-all shadow-md rounded-10 p-1 cursor-pointer"
          onClick={handleOpenAdd}
        >
          <Plus className="w-6 h-6 text-green-500 font-bold" />
        </div>
      </div>

      <div className="grid laptop:grid-cols-4 gap-2 laptop:gap-4 ">
        {isLoading &&
          new Array(4)
            .fill("")
            .map((_item, index) => (
              <div
                key={index}
                className="w-full h-[352px] skeleton rounded-5 shadow-md bg-white text-mediumGray"
              ></div>
            ))}
        {!isLoading &&
          articles.length > 0 &&
          articles.map((article) => (
            <ArticleCard key={article.id} data={article} />
          ))}
      </div>

      {/* Mobile, Infinite scroll */}
      {(isFetchingNextPage || hasNextPage) && (
        <div
          ref={sentryRef}
          className="laptop:hidden grid grid-cols-3 gap-x-2.5 gap-y-3.5 my-3.5"
        >
          {new Array(6).fill("").map((_item, index) => (
            <div key={index} className="skeleton w-full h-[160px]"></div>
          ))}
        </div>
      )}

      <ModalArticle mode="add" isOpen={isOpenAdd} onClose={handleOpenAdd} />
    </div>
  );
};

export default Articles;
