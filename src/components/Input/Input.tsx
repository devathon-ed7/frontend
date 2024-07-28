import { forwardRef, LegacyRef } from "react";

import { InputFieldProps } from "./Input.types";

export const InputField = forwardRef(
  (
    { id, label, type, placeholder, error, ...inputProps }: InputFieldProps,
    ref: LegacyRef<HTMLInputElement>,
  ) => (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        title={label}
        type={type}
        placeholder={placeholder}
        className={`border bg-gray-100 ${error ? "border-red-500" : "border-gray-300"} w-full rounded-md p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        ref={ref}
        {...inputProps}
      />
      {error && <div className="mt-1 text-sm text-red-500">{error}</div>}
    </div>
  ),
);
