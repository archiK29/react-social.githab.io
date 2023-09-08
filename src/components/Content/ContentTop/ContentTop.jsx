import React from "react";
import bg from "./../../../images/bg.jpg";
import s from "./ContentTop.module.css";

const ContentTop = () => {
  return (
    <div className={s.content__top}>
      <img className={s.content__imgTop} src={bg} alt="background" />
    </div>
  );
};

export default ContentTop;
