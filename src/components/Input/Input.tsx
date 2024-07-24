import { InputFieldProps } from "./Input.types";

export const InputField = ({
  id,
  type,
  title,
  placeholder,
  value,
  onChange,
  errorMessage,
}: InputFieldProps) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id}>{title}</label>
    <input
      id={id}
      type={type}
      title={title}
      placeholder={placeholder}
      className={`bg-gray-100 border ${errorMessage ? "border-red-500" : "border-gray-400"} w-full`}
      value={value}
      onChange={onChange}
    />
    {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
  </div>
);
