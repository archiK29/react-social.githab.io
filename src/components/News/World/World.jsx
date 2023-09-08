import React from "react";
import world_news_img from "../../../images/world-news-bg.webp";

import s from "./World.module.css";

const World = () => {
  return (
    <div className={s.worldNews}>
      <div className={s.worldNews__title}>
        What happened in the world on this day?
      </div>
      <img className={s.worldNews__img} src={world_news_img} alt="world" />
      <div className={s.worldNews__subtitle}>
        Пожары в Греции: какие уроки извлекут власти?
      </div>
      <div className={s.worldNews__text}>
        Лесные пожары в греческом Эвросе стали самыми крупными в Евросоюзе за
        последние 20 лет и самыми смертоносным в этом году. На протяжении более
        двух недель пламя уничтожало всё на своём пути, выжигая гектары
        национального лесного парка Дадия – Лефкими – Суфли, неподалёку от
        турецкой границы. По мнению местных жителей, из-за нехватки сил и
        средств, спасение леса не было приоритетом для властей. "Все усилия были
        сосредоточены на населённых пунктах и объектах инфраструктуры. Пожар
        очень быстро стал угрожать Александруполису. Поэтому туда были брошены
        все силы, а лес так и остался гореть", – говорит Дора Скарци, директор
        Общества защиты биоразнообразия Фракии.
      </div>
    </div>
  );
};

export default World;
