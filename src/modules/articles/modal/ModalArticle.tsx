import { IArticlesListData } from "@/queries/articles/IArticles";
import { useTranslation } from "react-i18next";

import useModalArticle from "./useModalArticle";

import TextAreaField from "@/components/ui/TextArea";
import TextField from "@/components/ui/TextField";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import VisualHidden from "@/components/ui/visual-hidden";

import { cn } from "@/config/utils-shadcn";

import ImageLoader from "@/utils/imageLoader";

interface IProps {
  mode: string;
  isOpen: boolean;
  initialForm?: IArticlesListData;
  onClose: () => void;
}
const ModalArticle = (props: IProps) => {
  /*======================== Props ======================== */

  const { t } = useTranslation();
  const { mode, isOpen } = props;
  const {
    category,
    form,
    isFormValid,
    loadingCategory,
    isSubmitting,
    handleForm,
    handleSubmit,
    handleImage,
    handleClose,
  } = useModalArticle(props);

  /*======================== Return ======================== */

  return (
    <Dialog open={isOpen} onOpenChange={() => handleClose()}>
      <DialogContent>
        <VisualHidden>
          <DialogTitle />
        </VisualHidden>
        <div className="bg-white rounded-10 p-3 w-[90vw] laptop:w-96 space-y-4">
          <h2 className="text-xl font-bold text-darkGray capitalize">
            {t(`article.${mode}`)}
          </h2>

          {mode !== "delete" ? (
            <div className="space-y-3">
              <TextField
                label={t("article.title")}
                value={form.title}
                type="text"
                name="title"
                placeholder={t("article.title")}
                // disabled={loading}
                onChange={(e) => handleForm("title", e.target.value)}
              ></TextField>

              <TextAreaField
                label={t("article.description")}
                value={form.description}
                name="description"
                placeholder={t("article.description")}
                // disabled={loading}
                onChange={(e) => handleForm("description", e.target.value)}
              ></TextAreaField>

              <div>
                <label htmlFor="logo-upload">
                  <input
                    id="logo-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImage}
                  />
                  {form.cover_image_url ? (
                    <ImageLoader
                      src={form.cover_image_url}
                      alt="Cover"
                      className="w-full h-20 object-cover rounded-10 transition-all duration-300 hover:opacity-70 cursor-pointer"
                    />
                  ) : (
                    <div className="cursor-pointer text-center border border-dashed py-2 hover:bg-lightGray transition-all duration-300">
                      {t("article.cover-image")}
                    </div>
                  )}
                </label>
              </div>

              {mode === "add" && (
                <div className="flex flex-wrap gap-3">
                  {!loadingCategory &&
                    category.length > 0 &&
                    category.map((item) => (
                      <div
                        key={item.id}
                        className={cn(
                          "text-nowrap shadow-md bg-white text-mediumGray px-4 py-0.5 rounded-10 text-center text-xl hover:bg-mediumGray hover:text-white transition-color cursor-pointer relative",
                          form.category === item.id
                            ? "!bg-mediumGray !text-white"
                            : ""
                        )}
                        onClick={() => {
                          handleForm(
                            "category",
                            form.category === item.id ? undefined : item.id
                          );
                        }}
                      >
                        <p className="max-w-96 text-ellipsis overflow-hidden">
                          {item.name || "-"}
                        </p>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-xl !my-6">{t("article.delete-confirmation")}</p>
          )}

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleClose}
              disabled={isSubmitting}
              variant="outline"
              className="rounded-md w-full h-10 font-semibold uppercase"
            >
              {t("close")}
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!isFormValid || loadingCategory || isSubmitting}
              className="rounded-md w-full h-10 font-semibold uppercase"
            >
              {t("submit")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalArticle;
