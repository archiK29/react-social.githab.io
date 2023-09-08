import React from "react";
import s from "./Like.module.css";
import like from "./../../../../../images/thumbsUp.svg";

const Like = () => {
  return (
    <div className={s.content__like}>
      <img src={like} alt="like" />
    </div>
  );
};

export default Like;
