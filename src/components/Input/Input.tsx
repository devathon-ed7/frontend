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
      className={`bg-gray-100 border ${error ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full p-2`}
      value={value}
      onChange={onChange}
    />
    {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
  </div>
);
