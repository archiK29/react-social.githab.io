import React from "react";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#s" className="navigation__link">
            Profile
          </a>
        </li>
        <li className="navigation__item">
          <a href="#s" className="navigation__link">
            Messages
          </a>
        </li>
        <li className="navigation__item">
          <a href="#s" className="navigation__link">
            News
          </a>
        </li>
        <li className="navigation__item">
          <a href="#s" className="navigation__link">
            Music
          </a>
        </li>
        <li className="navigation__item">
          <a href="#s" className="navigation__link">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
