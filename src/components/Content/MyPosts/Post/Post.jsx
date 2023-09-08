import React from "react";
import s from "./Post.module.css";
import Counter from "./Counter/Counter";

const Post = (props) => {
  return (
    <div className={s.content__post}>
      <img className={s.content__img} src={props.src} alt="person" />
      <span className={s.content__text}>{props.message}</span>
      <Counter text="колличество лайков" />
    </div>
  );
};

export default Post;
