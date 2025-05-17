import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

import ModalArticle from "@/modules/articles/modal/ModalArticle";
import useArticleDetail from "@/modules/articles/useArticleDetail";

import ImageLoader from "@/utils/imageLoader";

const ArticleDetail = () => {
  /*======================== Props ======================== */

  const { t } = useTranslation();
  const {
    article,
    isLoading,
    formMode,
    isOpenForm,
    handleCloseForm,
    handleForm,
  } = useArticleDetail();

  /*======================== Return ======================== */

  return (
    <div>
      {article ? (
        <div className="flex justify-between items-start gap-5">
          <h1 className="text-2xl font-bold text-darkGray capitalize mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-3">
            <Button
              variant="destructive"
              className="w-20"
              onClick={() => {
                handleForm("delete");
              }}
            >
              {t("delete")}
            </Button>
            <Button
              className="w-20"
              onClick={() => {
                handleForm("edit");
              }}
            >
              {t("Edit")}
            </Button>
          </div>
        </div>
      ) : (
        <div className="skeleton w-full laptop:w-52 h-8 rounded-5 shadow-md mb-4"></div>
      )}

      <div className="grid laptop:grid-cols-5 gap-5">
        {isLoading && (
          <>
            <div className="laptop:col-span-2 laptop:order-2 skeleton w-full h-52 rounded-5 shadow-md"></div>
            <div className="laptop:col-span-3 skeleton w-full h-96 rounded-5 shadow-md"></div>
          </>
        )}
        {article && (
          <>
            <div className="laptop:col-span-2 laptop:order-2">
              {article.cover_image_url ? (
                <ImageLoader
                  src={article.cover_image_url}
                  className="w-full h-auto object-cover rounded-5 shadow-md"
                />
              ) : (
                <div className="w-full h-44 bg-mediumGray rounded-5"></div>
              )}
            </div>
            <div className="laptop:col-span-3">
              <p className="text-base text-mediumGray mb-8">
                {article.description}
              </p>

              <p className="text-sm text-darkGray/60 text-right text-nowrap">
                {dayjs(article.updatedAt).format("MMM DD, YYYY")}
              </p>
            </div>
          </>
        )}
      </div>

      <ModalArticle
        mode={formMode}
        isOpen={isOpenForm}
        onClose={handleCloseForm}
        initialForm={article}
      />
    </div>
  );
};

export default ArticleDetail;
