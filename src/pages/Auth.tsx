import { useTranslation } from "react-i18next";

import TextField from "@/components/ui/TextField";
import { Button } from "@/components/ui/button";

import useAuth from "@/modules/auth/useAuth";

const Auth = () => {
  /*======================== Props ======================== */

  const { t } = useTranslation();
  const {
    section,
    form,
    isEmailValid,
    isFormValid,
    isLoading,
    handleSection,
    handleForm,
    handleSubmit,
  } = useAuth();

  /*======================== Return ======================== */

  return (
    <div className="w-dvw h-dvh bg-lightGray">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[400px]">
          <div className="space-y-5">
            <div className="bg-darkNavy rounded-10 grid grid-cols-2 gap-5 relative h-10 overflow-hidden">
              {/* Slider Background */}
              <div
                className={`z-0 absolute top-1/2 -translate-y-1/2 w-[calc(50%-4px)] h-2/3 bg-mediumGray rounded-lg transition-all duration-300 ${
                  section === "login" ? "left-1" : "left-1/2"
                }`}
              ></div>

              {/* Login Tab */}
              <span
                onClick={() => handleSection("login")}
                className="z-10 text-center text-2xl font-bold uppercase text-white cursor-pointer flex items-center justify-center"
              >
                {t("auth.login")}
              </span>

              {/* Register Tab */}
              <span
                onClick={() => handleSection("register")}
                className="z-10 text-center text-2xl font-bold uppercase text-white cursor-pointer flex items-center justify-center"
              >
                {t("auth.register")}
              </span>
            </div>

            {section === "register" && (
              <TextField
                label={t("auth.email")}
                value={form.email}
                type="text"
                name="email"
                placeholder={t("auth.email")}
                disabled={isLoading}
                onChange={(e) => handleForm("email", e.target.value)}
                onEnter={() => handleSubmit()}
              >
                {form.email.length > 0 && !isEmailValid && (
                  <p className="text-red-600 mb-0 text-xs">
                    {t("auth.email-invalid")}
                  </p>
                )}
              </TextField>
            )}

            <TextField
              label={t("auth.username")}
              value={form.username}
              type="text"
              name="username"
              placeholder={t("auth.username")}
              disabled={isLoading}
              onChange={(e) => handleForm("username", e.target.value)}
              onEnter={() => handleSubmit()}
            ></TextField>

            <TextField
              label={t("auth.password")}
              value={form.password}
              type="password"
              name="password"
              placeholder={t("auth.password")}
              disabled={isLoading}
              onChange={(e) => handleForm("password", e.target.value)}
              onEnter={() => handleSubmit()}
            ></TextField>

            <Button
              disabled={!isFormValid || isLoading}
              onClick={handleSubmit}
              className="w-full text-lg font-semibold"
            >
              {section === "register" ? t("auth.register") : t("auth.login")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
