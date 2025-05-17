import { Check, Pencil, SquarePlus, Trash2, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@/config/utils-shadcn";

import useCategory from "@/modules/category/useCategory";

const Category = () => {
  /*======================== Props ======================== */

  const { t } = useTranslation();
  const {
    section,
    formEdit,
    category,
    loading,
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
  } = useCategory();

  /*======================== Return ======================== */
  return (
    <div>
      <h1 className="text-2xl font-bold text-darkGray capitalize mb-4">
        {t("menu.category")}
      </h1>
      <div className="flex flex-wrap gap-3">
        {loading &&
          new Array(6)
            .fill("")
            .map((_item, index) => (
              <div
                key={index}
                className="w-full laptop:w-52 h-8 skeleton shadow-md bg-white text-mediumGray px-4 py-0.5 !rounded-full text-center"
              ></div>
            ))}

        {!loading && (
          <>
            {category.length > 0 &&
              category.map((item) => (
                <div
                  key={item.documentId}
                  className={cn(
                    "text-nowrap shadow-md bg-white text-mediumGray px-4 py-0.5 rounded-10 text-center text-xl hover:bg-mediumGray hover:text-white transition-color cursor-pointer relative min-w-[160px] w-full laptop:w-auto",
                    selectedCategory === item.documentId
                      ? "!bg-mediumGray !text-white rounded-br-none"
                      : ""
                  )}
                  onClick={() => {
                    if (
                      section === "update" &&
                      selectedCategory === item.documentId
                    )
                      return;
                    handleSelectCategory(item.documentId);
                  }}
                >
                  {section === "update" &&
                  selectedCategory === item.documentId ? (
                    <input
                      ref={(el) => {
                        inputRefs.current[item.documentId] = el;
                      }}
                      className="bg-transparent"
                      value={formEdit.name}
                      type="text"
                      name="name"
                      placeholder={t("category.edit")}
                      disabled={loading}
                      onChange={(e) => handleFormEdit(e.target.value)}
                    ></input>
                  ) : (
                    <p className="max-w-96 text-ellipsis overflow-hidden">
                      {item.name || "-"}
                    </p>
                  )}
                  {selectedCategory === item.documentId && (
                    <div className="absolute top-full right-0 bg-mediumGray rounded-b-10 z-10">
                      <div className="flex items-center gap-2 px-2 py-2">
                        {section === "" && (
                          <>
                            <Trash2
                              className="w-6 h-6 text-red-600"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSection("delete");
                              }}
                            />
                            <Pencil
                              className="w-6 h-6 text-blue"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSection("update", {
                                  id: item.documentId,
                                  name: item.name,
                                });
                              }}
                            />
                          </>
                        )}
                        {(section === "delete" || section === "update") && (
                          <>
                            <X
                              className="w-6 h-6 text-red-600"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectCategory("");
                              }}
                            />
                            <Check
                              className="w-6 h-6 text-green-500"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (section === "update") {
                                  handleUpdate();
                                } else {
                                  handleDelete(item.documentId);
                                }
                              }}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}

            <div className="shadow-md bg-white text-mediumGray px-4 py-0.5 rounded-10 flex gap-2 items-center w-full laptop:w-auto">
              <input
                className="bg-[#f5f8fa] flex-auto"
                value={name}
                type="text"
                name="name"
                placeholder={t("category.add")}
                disabled={loading}
                onChange={(e) => handleName(e.target.value)}
              ></input>
              <SquarePlus
                className={cn(
                  "w-6 h-6 text-green-500 cursor-pointer",
                  (!name || loading) && "cursor-not-allowed text-[#E8E8E8]"
                )}
                onClick={() => {
                  if (!name || loading) return;
                  handleAdd();
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Category;
