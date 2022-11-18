import React from "react";
import StylesHeaderMenu from "./header-menu.module.css";

export function HeaderMenu() {
  return (
    <div className={`${StylesHeaderMenu.container}`}>
      <ul className={`${StylesHeaderMenu.list}`}>
        <li className={`${StylesHeaderMenu.item}`}>
          <a href="" className={`${StylesHeaderMenu.link}`}>
            Услуги
          </a>
        </li>
        <li className={`${StylesHeaderMenu.item}`}>
          <a href="" className={`${StylesHeaderMenu.link}`}>
            Виджеты
          </a>
        </li>
        <li className={`${StylesHeaderMenu.item}`}>
          <a href="" className={`${StylesHeaderMenu.link}`}>
            Интеграции
          </a>
        </li>
        <li className={`${StylesHeaderMenu.item}`}>
          <a href="" className={`${StylesHeaderMenu.link}`}>
            Кейсы
          </a>
        </li>
        <li className={`${StylesHeaderMenu.item} ${StylesHeaderMenu.itemHide}`}>
          <a href="" className={`${StylesHeaderMenu.link}`}>
            Сертификаты
          </a>
        </li>
      </ul>
    </div>
  );
}
