import React from "react";
import s from "./News.module.css";
import World from "./World/World";
import Russia from "./Russia/Russia";
import Europ from "./Europ/Europ";
import Economics from "./Economics/Economics";
import Culture from "./Culture/Culture";
import Sport from "./Sport/Sport";
import { Routes, Route, Link } from "react-router-dom";
const News = () => {
  return (
    <div className={s.news__wrapper}>
      <div className={s.news}>
        <div className={s.news__title}>World News</div>
        <ul className={s.news__list}>
          <li className={s.new__item}>
            <Link to="/news/world" className={s.news__link}>
              World
            </Link>
          </li>
          <li className={s.new__item}>
            <Link to="/news/russia" className={s.news__link}>
              Russia
            </Link>
          </li>
          <li className={s.new__item}>
            <Link to="/news/europ" className={s.news__link}>
              Europ
            </Link>
          </li>
          <li className={s.new__item}>
            <Link to="/news/economics" className={s.news__link}>
              Economics
            </Link>
          </li>
          <li className={s.new__item}>
            <Link to="/news/culture" className={s.news__link}>
              Culture
            </Link>
          </li>
          <li className={s.new__item}>
            <Link to="/news/sport" className={s.news__link}>
              Sport
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.news__category}>
        <Routes>
          <Route path="/russia" element={<Russia />} />
          <Route path="/world" element={<World />} />
          <Route path="/europ" element={<Europ />} />
          <Route path="/economics" element={<Economics />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/sport" element={<Sport />} />
        </Routes>
      </div>
    </div>
  );
};

export default News;
