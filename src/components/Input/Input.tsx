import { InputFieldProps } from "./Input.types";

export const InputField = ({ id, type, placeholder, value, onChange }: InputFieldProps) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id}>{placeholder}</label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="bg-gray-100 border border-gray-400 w-full"
      value={value}
      onChange={onChange}
    />
  </div>
);
