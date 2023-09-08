import React from "react";
import culture_news from "../../../images/culture_news.webp";

import s from "./Culture.module.css";

const Culture = () => {
  return (
    <div className={s.cultureNews}>
      <div className={s.cultureNews__title}>Economic news</div>
      <img className={s.cultureNews__img} src={culture_news} alt="Culture" />
      <div className={s.cultureNews__subtitle}>
        Замминистра культуры Италии Згарби посетил выставку о Рахманинове на
        Сицилии
      </div>
      <div className={s.cultureNews__text}>
        Замминистра культуры Италии посетил выставку о композиторе Сергее
        Рахманинове на Сицилии. Проект "Сергей Рахманинов: "Я - русский
        композитор" стал частью программы к 150-летию композитора, которая
        прошла в сицилийском городе Эриче при поддержке Русского дома в Риме", –
        сообщается в официальном телеграм-канале ведомства. В ведомстве
        подчеркнули, что Згарби "отметил важность и актуальность творчества
        великих русских деятелей культуры". Также почетным гостем выставки стала
        мэр Эриче Даниэла Тоскано.
      </div>
    </div>
  );
};

export default Culture;
