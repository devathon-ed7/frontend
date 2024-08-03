import "./SideMenu.css";
import { useState } from "react";

export const SideMenu = () => {
  const [isMaxNavWidth, setIsMaxNavWidth] = useState(true);
  const [chevronClass, setChevronClass] = useState("chevron-left");

  const toggleNavWidth = () => {
    setIsMaxNavWidth(!isMaxNavWidth);
    setChevronClass(isMaxNavWidth ? "chevron-right" : "chevron-left");
  };

  return (
    <nav className={`${isMaxNavWidth ? "max-nav-width" : "min-nav-width"} side-menu`}>
      <ul className="nav-wrapper">
        <li className={`nav-item ${!isMaxNavWidth ? "compact" : ""}`}>
          <a href="/" className="flex items-center">
            <span className="home-icon"></span>
            <span className="home-text">Inicio</span>
          </a>
        </li>
      </ul>
      <div className="chevron-wrapper">
        <span className={`${chevronClass} cursor-pointer`} onClick={toggleNavWidth}></span>
      </div>
    </nav>
  );
};
