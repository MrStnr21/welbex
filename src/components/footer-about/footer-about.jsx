import React from "react";
import StylesFooterAbout from "./footer-about.module.css";

export function FooterAbout() {
  return (
    <div className={`${StylesFooterAbout.container}`}>
      <h2 className={`${StylesFooterAbout.title}`}>О компании</h2>
      <ul className={`${StylesFooterAbout.list}`}>
        <li className={`${StylesFooterAbout.item}`}>
          <a className={`${StylesFooterAbout.link}`} href="##">
            Партнёрская программа
          </a>
        </li>
        <li className={`${StylesFooterAbout.item}`}>
          <a className={`${StylesFooterAbout.link}`} href="##">
            Вакансии
          </a>
        </li>
      </ul>
    </div>
  );
}
