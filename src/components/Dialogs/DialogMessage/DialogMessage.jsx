import React from "react";
import s from "./DialogMessage.module.css";

const DialogMessage = (props) => {
  return <div className={s.dialog__message}>{props.message}</div>;
};
export default DialogMessage;
