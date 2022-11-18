import React from "react";
import StylesAppFooter from "./app-footer.module.css";
import { FooterAbout } from "../footer-about/footer-about";
import { FooterMenu } from "../footer-menu/footer-menu";
import { FooterContact } from "../footer-contact/footer-contact";

export function AppFooter() {
  return (
    <footer className={StylesAppFooter.footer}>
      <FooterAbout />
      <FooterMenu />
      <FooterContact />
      <div className={StylesAppFooter.info}>
        <p className={StylesAppFooter.copyright}>
          ©WELBEX 2022. Все права защищены.
        </p>
        <a className={StylesAppFooter.confidential} href="">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}
