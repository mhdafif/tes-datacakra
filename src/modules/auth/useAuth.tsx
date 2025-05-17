import { queryLogin, queryRegister } from "@/queries/auth/authQueries";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { EPath } from "@/router/useRouter";

import useUserStore from "@/store/user/userStore";

const useAuth = () => {
  /*======================== Props ======================== */

  const { i18n } = useTranslation();
  const navigate = useNavigate();

  /*======================== Queries ======================== */

  const { mutateAsync: register, isPending: isPendingRegister } =
    queryRegister();
  const { mutateAsync: login, isPending: isPendingLogin } = queryLogin();

  /*======================== Store ======================== */

  const getUser = useUserStore((state) => state.getState);

  /*======================== UseState ======================== */

  const [section, setSection] = useState<"login" | "register">("login");
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });
  const isEmailValid = useMemo(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(form.email);
  }, [form.email]);
  const isFormValid = useMemo(() => {
    if (section === "login") {
      return form.username.length > 0 && form.password.length > 0;
    }
    return (
      form.email.length > 0 &&
      form.username.length > 0 &&
      form.password.length > 0 &&
      isEmailValid
    );
  }, [section, form, isEmailValid]);

  /*======================== Handler ======================== */

  const handleSection = (value: "login" | "register") => {
    setSection(value);
    setForm({
      email: "",
      username: "",
      password: "",
    });
  };

  const handleForm = (type: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleSubmit = async () => {
    if (section === "register") {
      await register(form);
    } else {
      await login({
        identifier: form.username,
        password: form.password,
      });
    }
  };

  /*======================== UseEffect ======================== */

  useEffect(() => {
    if (getUser("token")) {
      navigate(EPath.home);
    }
  }, [getUser("token")]);

  /*======================== Others ======================== */

  /*======================== Return ======================== */
  /*======================== Queries ======================== */

  // const { data, isLoading } = queryLoadDummy();
  // const { mutateAsync: addDummy, isPending: isLoading } = queryAddDummy();
  // const { mutateAsync: updateDummy, isPending: isLoading } = queryUpdateDummy();

  /*======================== Handler ======================== */

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  /*======================== Return ======================== */

  return {
    // data,
    // isLoading,
    section,
    form,
    isEmailValid,
    isFormValid,
    isLoading: isPendingLogin || isPendingRegister,
    handleSection,
    handleForm,
    handleChangeLanguage,
    handleSubmit,
  };
};

export default useAuth;
