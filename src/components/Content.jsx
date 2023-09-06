import React from "react"; /* импортируем React для работы синтаксиса jsx */
import bg from "./../images/bg.jpg";
import avatar from "./../images/social-photo.jpg";

const Content = () => {
  return (
    <div className="content">
      <div className="content__top">
        <img className="content__img-top" src={bg} alt="background" />
      </div>
      <div className="content__account">
        <img className="content__account-img" src={avatar} alt="avatar" />
        <div className="content__account-info">
          <div className="content__account-name">Artur Kim</div>
          <div className="content__account-birth">
            Date of Birth: 29 september
          </div>
          <div className="content__account-city">City: Braslav</div>
          <div className="content__account-education">
            Education: Academy of the Ministry of Internal Affairs
          </div>
          <div className="site">Web Site: https://samuraijs.com</div>
        </div>
      </div>
      <div className="content__posts">
        <span>My posts</span>
        <form className="content__form">
          <input
            className="content__input"
            placeholder="your news..."
            type="text"
          ></input>
          <button className="content__btn">Send</button>
        </form>
      </div>
      <div className="post-one">Hey, why nobody love me?</div>
      <div className="post-two">It's our new programm! Hey!</div>
    </div>
  );
};

export default Content; /* обязательно экспортируем все компоненты */
