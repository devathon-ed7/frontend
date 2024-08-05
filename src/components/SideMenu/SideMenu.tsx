import { useState } from "react";
import "./SideMenu.css";
import { NavItem } from "../NavItem/NavItem";

export const SideMenu: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const toggleNavExpansion = () => setIsNavExpanded(!isNavExpanded);

  return (
    <nav className={`${isNavExpanded ? "max-nav-width" : "min-nav-width"} side-menu`}>
      <ul className="nav-wrapper">
        <NavItem to="home" label="Inicio" compact={!isNavExpanded} hasIcon={true}>
          <span className="home-icon"></span>
        </NavItem>
        <NavItem to="users" label="Users" compact={!isNavExpanded} hasIcon={false}>
          <span className="users-icon"></span>
        </NavItem>
        <NavItem to="roles" label="Roles" compact={!isNavExpanded} hasIcon={false}>
          <span className="role-icon"></span>
        </NavItem>
        <NavItem to="permissions" label="Permisos" compact={!isNavExpanded} hasIcon={false}>
          <span className="permission-icon"></span>
        </NavItem>
      </ul>
      <div className="chevron-wrapper">
        <span
          className={`chevron ${isNavExpanded ? "chevron-left" : "chevron-right"} cursor-pointer`}
          onClick={toggleNavExpansion}
        ></span>
      </div>
    </nav>
  );
};
