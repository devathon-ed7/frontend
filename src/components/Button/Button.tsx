import { ButtonProps } from "./Button.types";

export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="rounded-lg border-2 border-black bg-white px-10 py-2 text-center text-black">
      {title}
    </button>
  );
};
