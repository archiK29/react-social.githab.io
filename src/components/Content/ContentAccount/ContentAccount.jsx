import React from "react";
import avatar from "./../../../images/social-photo.jpg";
import s from "./ContentAccount.module.css";

const ContentAccount = () => {
  return (
    <div className={s.content__account}>
      <img className={s.content__accountImg} src={avatar} alt="avatar" />
      <div className={s.content__accountInfo}>
        <div className={s.content__accountName}>Artur Kim</div>
        <div className={s.content__accountBirth}>
          Date of Birth: 29 september
        </div>
        <div className={s.content__accountCity}>City: Braslav</div>
        <div className={s.content__accountEducation}>
          Education: Academy of the Ministry of Internal Affairs
        </div>
        <div className={s.site}>Web Site: https://samuraijs.com</div>
      </div>
    </div>
  );
};
export default ContentAccount;
