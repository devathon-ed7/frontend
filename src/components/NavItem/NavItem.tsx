import { Link } from "react-router-dom";
import "./NavItem.css";
import { NavItemProps } from "../../types";

export const NavItem: React.FC<NavItemProps> = ({
  to,
  label,
  compact,
  hasIcon,
  className,
  children,
}) => {
  return (
    <li
      className={`nav-item ${compact ? "compact" : ""} ${hasIcon ? "nav-item-icon" : ""} ${className || ""}`}
    >
      <Link to={to} className="flex items-center">
        {children}
        <span className="compact-text">{label}</span>
      </Link>
    </li>
  );
};
