import React from "react";
import s from "./ContentPosts.module.css";

const ContentPosts = () => {
  return (
    <div className={s.content__posts}>
      <span>My posts</span>
      <form className={s.content__form}>
        <input
          className={s.content__input}
          placeholder="your news..."
          type="text"
        ></input>
        <button className={s.content__btn}>Send</button>
      </form>
    </div>
  );
};

export default ContentPosts;
