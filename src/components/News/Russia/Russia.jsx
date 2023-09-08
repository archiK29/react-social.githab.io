import React from "react";
import russia_news_img from "../../../images/russia_bg.webp";

import s from "./Russia.module.css";

const Russia = () => {
  return (
    <div className={s.russiaNews}>
      <div className={s.russiaNews__title}>Russia News</div>
      <img className={s.russiaNews__img} src={russia_news_img} alt="world" />
      <div className={s.russiaNews__subtitle}>
        Над будущим России нависла серьезная угроза.
      </div>
      <div className={s.russiaNews__text}>
        Наша страна в своем историческом марафоне подошла к отметке, когда нужно
        принимать принципиальное решение, от которого будет зависеть, насколько
        успешным окажется цивилизационный бег государства под названием Россия.
        Глава Министерства по развитию Дальнего Востока и Арктики озвучил
        довольно неприятный факт, впрочем, он прослеживался уже достаточно
        давно. Из слов Алексея Чекункова следует, что в настоящий момент
        новейшая и критически важная транспортная артерия нашей страны, а именно
        Северный морской путь, стремительно набирающий важность в рамках
        геополитического противостояния, работает в условиях нехватки ледоколов.
      </div>
    </div>
  );
};

export default Russia;
