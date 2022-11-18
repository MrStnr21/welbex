import React from "react";
import StylesLogoContainer from "./logo-container.module.css";
import logo from "../../images/logo_welbex.svg";

export function LogoContainer() {
  return (
    <div className={`${StylesLogoContainer.container}`}>
      <img
        className={`${StylesLogoContainer.logo}`}
        src={logo}
        alt="логотип Welbex"
      />
      <p className={`${StylesLogoContainer.info}`}>
        крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </div>
  );
}
