import { useState } from "react";

import visibilityOff from "@/assets/icon/visibility-off.svg";
import visibility from "@/assets/icon/visibility.svg";

interface IProps {
  label?: string;
  value: any;
  type: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  classNameParent?: string;
  classNameInput?: string;
  onChange?(e: any): void;
  onEnter?(): void;
  onFocus?(e: any): void;
  autoComplete?: string;
  firstChildren?: React.ReactNode;
  children?: React.ReactNode;
  readOnly?: boolean;
}

const blockInvalidChar = (e: any) =>
  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

const TextField = (props: IProps) => {
  /*======================== Props ======================== */

  const {
    label,
    value,
    type,
    name,
    disabled,
    classNameParent,
    classNameInput,
    placeholder,
    autoComplete,
    onChange,
    onEnter,
    onFocus,
    firstChildren,
    children,
    readOnly,
  } = props;

  /*======================== useState ======================== */

  const [showPassword, setShowPassword] = useState<boolean>(false);

  /*======================== handler ======================== */

  const handleKeydown = (e: any) => {
    if (e.key === "Enter") {
      if (onEnter) {
        onEnter();
      }
    }

    return type === "number" ? blockInvalidChar(e) : undefined;
  };

  const handleFocus = (e: any) => {
    if (onFocus) {
      onFocus(e);
    }
  };

  /*======================== Return ======================== */

  return (
    <div className={`block my-1 ${classNameParent || ""}`}>
      {label && (
        <label className="text-gray-700" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative flex items-center my-1">
        {firstChildren}
        <input
          className={`bg-[#f5f8fa] p-2 placeholder-[#9d9d9d] appearance-none w-full font-medium disabled:text-[#a3a3a3] disabled:cursor-not-allowed disabled:!bg-[#E8E8E8] border border-solid ${
            classNameInput || ""
          } ${type === "password" ? "!pr-12" : ""} ${
            type === "password" && !value ? "text-ellipsis" : ""
          }`}
          style={{ outline: "0 none", boxShadow: "none" }}
          {...{
            value,
            name,
            disabled,
            placeholder,
            autoComplete,
            onChange,
            readOnly,
          }}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          id={name}
          onKeyDown={(e) => handleKeydown(e)}
          onFocus={(e) => handleFocus(e)}
        />
        {type === "password" &&
          (showPassword ? (
            <img
              alt="visiblity"
              src={visibility}
              className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3 hover:bg-gray-200 rounded-[50%] h-6 w-6"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <img
              alt="visiblity-off"
              src={visibilityOff}
              className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3 hover:bg-gray-200 rounded-[50%] h-6 w-6"
              onClick={() => setShowPassword(true)}
            />
          ))}
      </div>
      {children}
    </div>
  );
};

export default TextField;
