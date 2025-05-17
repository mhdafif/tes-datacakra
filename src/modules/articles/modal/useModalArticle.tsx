import {
  IArticlesListData,
  IArticlesPayload,
} from "@/queries/articles/IArticles";
import {
  queryCreateArticles,
  queryDeleteArticles,
  queryUpdateArticles,
} from "@/queries/articles/articlesQueries";
import { queryLoadCategoryList } from "@/queries/category/categoryQueries";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { uploadFile } from "@/utils/uploadImage";

interface IProps {
  mode: string;
  isOpen: boolean;
  initialForm?: IArticlesListData;
  onClose: () => void;
}

interface IForm {
  title: string;
  description: string;
  cover_image_url: string;
  category?: number;
}

const useModalArticle = (props: IProps) => {
  /*======================== Props ======================== */

  const navigate = useNavigate();
  const { mode, isOpen, initialForm, onClose } = props;

  /*======================== Queries ======================== */

  const {
    data: dataCategory,
    isLoading,
    isRefetching,
  } = queryLoadCategoryList();
  const { mutateAsync: createArticle, isPending: isPendingCreate } =
    queryCreateArticles();
  const { mutateAsync: updateArticle, isPending: isPendingUpdate } =
    queryUpdateArticles();
  const { mutateAsync: deleteArticle, isPending: isPendingDelete } =
    queryDeleteArticles();

  /*======================== UseState ======================== */

  const [form, setForm] = useState<IForm>({
    title: "",
    description: "",
    category: undefined,
    cover_image_url: "",
  });
  const isFormValid = useMemo(() => {
    if (mode === "delete") return true; // No validation for delete mode
    return (
      form.title.length > 0 &&
      form.description.length > 0 &&
      form.cover_image_url.length > 0
    );
  }, [form, mode]);

  /*======================== Handler ======================== */

  const handleClose = () => {
    onClose();
    setForm({
      title: "",
      description: "",
      category: undefined,
      cover_image_url: "",
    });
  };
  const handleForm = (type: keyof IForm, value: any) => {
    setForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  };
  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const response = await uploadFile(file);
      handleForm("cover_image_url", response.url);
    }
  };

  const handleSubmit = async () => {
    const payload: IArticlesPayload = {
      id: initialForm?.documentId || "",
      data: {
        title: form.title,
        description: form.description,
        cover_image_url: form.cover_image_url,
        category: form.category,
      },
    };
    switch (mode) {
      case "add":
        delete payload.id; // Remove id for create
        await createArticle(payload);
        break;
      case "edit":
        await updateArticle(payload);
        break;

      default:
        await deleteArticle(initialForm?.documentId || "");
        navigate("/articles");
        break;
    }
    handleClose();
  };

  /*======================== UseEffect ======================== */

  useEffect(() => {
    if (isOpen) {
      if (mode === "edit" && initialForm) {
        setForm({
          title: initialForm.title,
          description: initialForm.description,
          cover_image_url: initialForm.cover_image_url,
        });
      }
    }
  }, [isOpen]);

  /*======================== Return ======================== */

  return {
    form,
    category: dataCategory?.data || [],
    isFormValid,
    loadingCategory: isLoading || isRefetching,
    isSubmitting: isPendingCreate || isPendingUpdate || isPendingDelete,
    handleForm,
    handleSubmit,
    handleImage,
    handleClose,
  };
};

export default useModalArticle;
