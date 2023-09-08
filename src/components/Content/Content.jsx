import React from "react"; /* импортируем React для работы синтаксиса jsx */
import s from "./Content.module.css";
import ContentTop from "./ContentTop/ContentTop";
import ContentAccount from "./ContentAccount/ContentAccount.jsx";
import MyPosts from "./MyPosts/MyPosts";
import ContentPosts from "./ContentPosts/ContentPosts";

const Content = () => {
  return (
    <div className={s.content}>
      <ContentTop />
      <ContentAccount />
      <ContentPosts />
      <MyPosts />
    </div>
  );
};

export default Content; /* обязательно экспортируем все компоненты */
