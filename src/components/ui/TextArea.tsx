import { useEffect, useRef } from "react";

interface IProps {
  label?: string;
  value: any;
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
  autoFocus?: boolean;
  rows?: number;
}

const TextAreaField = (props: IProps) => {
  const {
    label,
    value,
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
    autoFocus = false,
    rows = 4,
  } = props;

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, [autoFocus]);

  const handleKeydown = (e: any) => {
    if (e.key === "Enter" && e.shiftKey === false) {
      if (onEnter) {
        e.preventDefault(); // prevent new line
        onEnter();
      }
    }
  };

  const handleFocus = (e: any) => {
    if (onFocus) {
      onFocus(e);
    }
  };

  return (
    <div className={`block my-1 ${classNameParent || ""}`}>
      {label && (
        <label className="text-gray-700" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="relative flex items-start my-1">
        {firstChildren}
        <textarea
          ref={ref}
          rows={rows}
          className={`bg-[#f5f8fa] p-2 placeholder-[#9d9d9d] appearance-none w-full font-medium disabled:text-[#a3a3a3] disabled:cursor-not-allowed disabled:!bg-[#E8E8E8] border border-solid ${
            classNameInput || ""
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
          id={name}
          onKeyDown={handleKeydown}
          onFocus={handleFocus}
        />
      </div>
      {children}
    </div>
  );
};

export default TextAreaField;
