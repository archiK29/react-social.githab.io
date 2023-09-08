import React from "react";
import s from "./Music.module.css";

const News = () => {
  return (
    <div className={s.music}>
      <div className={s.music__title}>MUSIC</div>
      <ul className={s.music__list}>
        <li>Composition one</li>
      </ul>
    </div>
  );
};

export default News;
