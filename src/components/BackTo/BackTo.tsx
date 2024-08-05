import { Link } from "react-router-dom";
import "./BackTo.css";

interface BackToProps {
  children?: React.ReactNode;
}

export const BackTo: React.FC<BackToProps> = (props) => {
  return (
    <Link
      to={-1}
      className="mb-8 flex w-fit items-center rounded-md border-2 border-solid border-blue-500 px-2 py-2 text-blue-500"
    >
      <span className="arrow-left-icon"></span>
      <span className="ml-2 text-sm">{props.children || "Back to"}</span>
    </Link>
  );
};
