import React from "react";
import StylesSlogan from "./slogan.module.css";

export function Slogan() {
  return (
    <div className={`${StylesSlogan.container}`}>
      <h2 className={`${StylesSlogan.title}`}>
        Зарабатывайте больше
        <span className={`${StylesSlogan.titleSpan}`}> с WELBEX</span>
      </h2>
      <p className={`${StylesSlogan.text}`}>
        Развиваем и контролируем продажи за вас
      </p>
    </div>
  );
}

