import React from "react";
import s from "./DialogItem.module.css";
import { Link } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog__personsItem}>
      <img className={s.dialog__personsImg} src={props.src} alt="Person" />
      <Link to={props.to} className={s.dialog__personsLink + " " + s.active}>
        {props.name}
      </Link>
    </div>
  );
};

export default DialogItem;
/* обязательно экспортируем все компоненты */
