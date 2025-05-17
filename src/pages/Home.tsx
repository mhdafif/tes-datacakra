import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";

import useHome from "@/modules/home/useHome";

const Home = () => {
  /*======================== Props ======================== */

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { page, articles, loadingArticles, hasNextPage, handlePage } =
    useHome();

  /*======================== Return ======================== */

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-darkGray capitalize">
          {t("menu.articles")}
        </h1>
        <Button
          variant="outline"
          className="h-8"
          onClick={() => navigate("/articles")}
        >
          {t("view-all")}
        </Button>
      </div>

      <div className="group/card-container relative">
        <div className="grid laptop:grid-cols-4 gap-2 laptop:gap-4 ">
          {loadingArticles &&
            new Array(4)
              .fill("")
              .map((_item, index) => (
                <div
                  key={index}
                  className="w-full h-[352px] skeleton rounded-5 shadow-md bg-white text-mediumGray"
                ></div>
              ))}
          {!loadingArticles &&
            articles.length > 0 &&
            articles.map((article) => (
              <ArticleCard key={article.id} data={article} />
            ))}
        </div>

        {!loadingArticles && page > 1 && (
          <div
            className="hidden laptop:block absolute z-10 top-1/2 -translate-y-1/2 duration-300 text-white border border-solid border-darkGray rounded-10 bg-darkGray hover:bg-darkGray/80 cursor-pointer transition-all group-hover/card-container:opacity-100 opacity-0 group-hover/card-container:-left-[14px] -left-7"
            onClick={() => handlePage(page - 1)}
          >
            <ArrowBigLeft className="w-7 h-7" />
          </div>
        )}

        {!loadingArticles && hasNextPage && (
          <div
            className="hidden laptop:block absolute z-10 top-1/2 -translate-y-1/2 duration-300 text-white border border-solid border-darkGray rounded-10 bg-darkGray hover:bg-darkGray/80 cursor-pointer transition-all group-hover/card-container:opacity-100 opacity-0 group-hover/card-container:-right-[14px] -right-7"
            onClick={() => handlePage(page + 1)}
          >
            <ArrowBigRight className="w-7 h-7" />
          </div>
        )}
        {!loadingArticles && (
          <div className="flex laptop:hidden justify-between items-center mt-4">
            <ArrowBigLeft
              className="w-7 h-7 text-white border border-solid border-darkGray rounded-10 bg-darkGray hover:bg-darkGray/80 cursor-pointer transition-all aria-disabled:opacity-50 aria-disabled:pointer-events-none"
              aria-disabled={page <= 1}
              onClick={() => handlePage(page - 1)}
            />
            <ArrowBigRight
              className="w-7 h-7 text-white border border-solid border-darkGray rounded-10 bg-darkGray hover:bg-darkGray/80 cursor-pointer transition-all aria-disabled:opacity-50 aria-disabled:pointer-events-none"
              aria-disabled={!hasNextPage}
              onClick={() => handlePage(page + 1)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
