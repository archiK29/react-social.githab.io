import React from "react";
import Post from "./Post/Post";
import man from "./../../../images/man.png";
import woman from "./../../../images/woman.png";

const MyPosts = () => {
  return (
    <div>
      <Post message="Привет! Меня зовут Артур)" src={man} />
      <Post
        message="Я создаю свою социальную сеть с использованием библиотеки React."
        src={man}
      />

      {/* <div className={s.content__post}>
        <img className={s.content__img} src={woman} alt="woman" />
        <span className={s.content__text}>It's our new programm! Hey!</span>
      </div> */}
    </div>
  );
};

export default MyPosts;
