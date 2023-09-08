import React from "react";
import economy_news from "../../../images/economy-news.webp";

import s from "./Economics.module.css";

const Economics = () => {
  return (
    <div className={s.economyNews}>
      <div className={s.economyNews__title}>Economic news</div>
      <img className={s.economyNews__img} src={economy_news} alt="Europ" />
      <div className={s.economyNews__subtitle}>
        Эксперты РСХБ оценили перспективы компаний АПК на фондовом рынке.
      </div>
      <div className={s.economyNews__text}>
        Компании агропромышленного комплекса пока представлены на фондовом рынке
        РФ в небольшом количестве, в их числе, например, виноделы и
        производители сыра, но перспективы обещают расширение этого списка в
        ближайшие пять лет - например, за счет винодельческих компаний,
        говорится в аналитических материалах Россельхозбанка (есть у РИА
        Новости). Винодельческая отрасль на фондовом рынке представлена только
        двумя российскими компаниями – Novabev Group (бывшая "Белуга Групп") и
        "Абрау-Дюрсо"; не так давно на рынок облигаций вышла "Истринская
        сыроварня" - игрок другого сегмента и менее крупный.
      </div>
    </div>
  );
};

export default Economics;
