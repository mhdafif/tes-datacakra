import { IArticlesListData } from "@/queries/articles/IArticles";
import dayjs from "dayjs";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ImageLoader from "@/utils/imageLoader";

interface IProps {
  data: IArticlesListData;
}
const ArticleCard = (props: IProps) => {
  /*======================== Props ======================== */

  const navigate = useNavigate();
  const { data: article } = props;

  /*======================== Others ======================== */

  return (
    <div
      className="w-full rounded-5 shadow-md bg-white overflow-hidden group/card cursor-pointer hover:opacity-90 transition-opacity duration-300 relative"
      onClick={() => navigate(`/articles/${article.documentId}`)}
    >
      <div className="shadow-md absolute top-3 right-3 rounded-5 bg-offWhite z-10 p-0.5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
        <ArrowRight className="w-5 h-5" />
      </div>
      {article.cover_image_url ? (
        <ImageLoader
          src={article.cover_image_url}
          className="w-full h-44 object-cover rounded-b-5"
        />
      ) : (
        <div className="w-full h-44  bg-mediumGray"></div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-darkGray mb-2">
          {article.title}
        </h2>
        <p className="text-base text-mediumGray mb-4 overflow-hidden line-clamp-3 h-18">
          {article.description}
        </p>
        <p className="text-sm text-darkGray/60 text-end">
          {dayjs(article.publishedAt).format("MMM DD, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
