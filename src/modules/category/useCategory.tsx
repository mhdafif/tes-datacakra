import { ICategoryPayload } from "@/queries/category/ICategory";
import {
  queryCreateCategory,
  queryDeleteCategory,
  queryLoadCategoryList,
  queryUpdateCategory,
} from "@/queries/category/categoryQueries";
import { useEffect, useRef, useState } from "react";

interface IForm {
  id: string;
  name: string;
}
const useCategory = () => {
  /*======================== Queries ======================== */

  const {
    data: dataCategoryList,
    isLoading,
    isRefetching,
  } = queryLoadCategoryList();
  const { mutateAsync: createCategory, isPending: isPendingCreate } =
    queryCreateCategory();
  const { mutateAsync: updateCategory, isPending: isPendingUpdate } =
    queryUpdateCategory();
  const { mutateAsync: deleteCategory, isPending: isPendingDelete } =
    queryDeleteCategory();

  /*======================== UseState ======================== */

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [section, setSection] = useState<"" | "add" | "update" | "delete">("");
  const [formEdit, setFormEdit] = useState<IForm>({
    id: "",
    name: "",
  });
  const [name, setName] = useState("");
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  /*======================== Handler ======================== */

  const handleSelectCategory = (documentId: string) => {
    if (selectedCategory === documentId) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(documentId);
    }
    setSection("");
  };

  const handleSection = (
    value: "" | "add" | "update" | "delete",
    data?: any
  ) => {
    setSection(value);
    if (data) {
      setFormEdit({
        id: data.id || "",
        name: data.name || "",
      });
    }
  };

  const handleFormEdit = (value: string) => {
    setFormEdit((prev) => ({
      ...prev,
      name: value,
    }));
  };
  const handleName = (value: string) => {
    setName(value);
  };

  const handleResetFormEdit = () => {
    setFormEdit({
      id: "",
      name: "",
    });
  };

  const handleAdd = async () => {
    const payload: ICategoryPayload = {
      data: {
        name,
      },
    };
    await createCategory(payload);
    handleSelectCategory("");
    setName("");
  };
  const handleUpdate = async () => {
    const payload: ICategoryPayload = {
      id: formEdit.id,
      data: {
        name: formEdit.name,
      },
    };
    await updateCategory(payload);
    handleSelectCategory("");
    setFormEdit({
      id: "",
      name: "",
    });
  };

  const handleDelete = async (id: string) => {
    await deleteCategory(id);
    handleResetFormEdit();
  };

  /*======================== UseEffect ======================== */

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    if (section === "update" && selectedCategory) {
      inputRefs.current[selectedCategory]?.focus();
    }
  }, [selectedCategory, section]);

  /*======================== Return ======================== */

  return {
    category: dataCategoryList?.data || [],
    loading:
      isLoading ||
      isRefetching ||
      isPendingCreate ||
      isPendingUpdate ||
      isPendingDelete,
    section,
    formEdit,
    inputRefs,
    name,
    selectedCategory,
    handleSection,
    handleFormEdit,
    handleName,
    handleDelete,
    handleAdd,
    handleSelectCategory,
    handleUpdate,
  };
};

export default useCategory;
