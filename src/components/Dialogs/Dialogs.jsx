import React from "react";
import s from "./Dialogs.module.css";
import alex from "../../images/persons/alex.jpg";
import vlad from "../../images/persons/vlad.jpg";
import pavel from "../../images/persons/pasha.jpg";
import max from "../../images/persons/max.jpg";
import ivan from "../../images/persons/ivan.jpg";
import stas from "../../images/persons/stas.jpg";
import { Link } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = () => {
  return (
    <div className={s.dialog}>
      <div className={s.dialog__title}>Dialog</div>
      <div className={s.dialog__wrapper}>
        <div className={s.dialog__persons}>
          <DialogItem
            src={alex}
            to="/dialogs/alexey_kolkovsky"
            name="Alexey Kolkovsky"
          />
          <DialogItem
            src={vlad}
            to="/dialogs/vlad_puchinsky"
            name="Vlad Puchinsky"
          />
          <DialogItem
            src={pavel}
            to="/dialogs/pavel_petkun"
            name="Pavel Petkun"
          />
          <DialogItem
            src={max}
            to="/dialogs/maxim_yarachnovich"
            name="Maxim Yarachnovich"
          />
          <DialogItem
            src={ivan}
            to="/dialogs/ivan_bezuglov"
            name="Ivan Bezuglov"
          />
          <DialogItem
            src={stas}
            to="/dialogs/stas_undrul"
            name="Stanislav Undrul"
          />
        </div>
        <div className={s.dialog__messages}>
          <DialogMessage message="Hi!" />
          <DialogMessage message="How is your it-kamasutra?" />
          <DialogMessage message="Yo" />
          <DialogMessage message="Yo" />
          <DialogMessage message="Yo" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
/* обязательно экспортируем все компоненты */
