import React from "react";
import StylesFooterMenu from "./footer-menu.module.css";

export function FooterMenu() {
  return (
    <div className={`${StylesFooterMenu.container}`}>
      <h2 className={`${StylesFooterMenu.title}`}>Меню</h2>
      <ul className={`${StylesFooterMenu.list}`}>
        <li className={`${StylesFooterMenu.item}`}>
          <a className={`${StylesFooterMenu.link}`} href="##">
            Расчёт стоимости
          </a>
        </li>
        <li className={`${StylesFooterMenu.item}`}>
          <a className={`${StylesFooterMenu.link}`} href="##">
            Услуги
          </a>
        </li>
        <li className={`${StylesFooterMenu.item}`}>
          <a className={`${StylesFooterMenu.link}`} href="##">
            Виджеты
          </a>
        </li>
        <li className={`${StylesFooterMenu.item}`}>
          <a className={`${StylesFooterMenu.link}`} href="##">
            Интеграции
          </a>
        </li>
        <li className={`${StylesFooterMenu.item}`}>
          <a className={`${StylesFooterMenu.link}`} href="##">
            Наши клиенты
          </a>
        </li>
        <li className={`${StylesFooterMenu.item}`}>
          <a className={`${StylesFooterMenu.link}`} href="##">
            Кейсы
          </a>
        </li>
        <li className={`${StylesFooterMenu.item}`}>
          <a className={`${StylesFooterMenu.link}`} href="##">
            Благодарственные письма
          </a>
        </li>
        <li className={`${StylesFooterMenu.item}`}>
          <a className={`${StylesFooterMenu.link}`} href="##">
            Сертификаты
          </a>
        </li>
        <li className={`${StylesFooterMenu.item}`}>
          <a className={`${StylesFooterMenu.link}`} href="##">
            Блог на Youtube
          </a>
        </li>
        <li className={`${StylesFooterMenu.item}`}>
          <a className={`${StylesFooterMenu.link}`} href="##">
            Вопрос / Ответ
          </a>
        </li>
      </ul>
    </div>
  );
}
