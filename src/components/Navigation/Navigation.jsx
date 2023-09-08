import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/content" className="navigation__link">
            Profile
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/dialogs" className="navigation__link">
            Messages
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/news" className="navigation__link">
            News
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/music" className="navigation__link">
            Music
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/settings" className="navigation__link">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
