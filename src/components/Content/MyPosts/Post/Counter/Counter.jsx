import React from "react";
import s from "./Counter.module.css";
import { useState } from "react";
import Like from "../Like/Like";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <div className={s.content__counter}>
      <div className={s.content__count}>
        <span onClick={handleInc}>
          <Like />
          {props.text}
        </span>
        <span className={s.content__countIncr}>{count}</span>
      </div>
    </div>
  );
};

export default Counter;
