import { ButtonProps } from "./Button.types";

export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="border-black border-2 bg-white text-black text-center px-10 py-2  rounded-lg">
      {title}
    </button>
  );
};
