import { InputFieldProps } from "./Input.types";

export const InputField = ({
  id,
  title,
  type,
  placeholder,
  value,
  onChange,
  error,
}: InputFieldProps) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {title}
    </label>
    <input
      id={id}
      title={title}
      type={type}
      placeholder={placeholder}
      className={`border bg-gray-100 ${error ? "border-red-500" : "border-gray-300"} w-full rounded-md p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
      value={value}
      onChange={onChange}
    />
    {error && <div className="mt-1 text-sm text-red-500">{error}</div>}
  </div>
);
