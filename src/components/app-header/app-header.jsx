import React from "react";
import stylesAppHeader from "./app-header.module.css";
import { LogoContainer } from "../logo-container/logo-container";
import { HeaderMenu } from "../header-menu/header-menu";
import { HeaderContact } from "../header-contact/header-contact";

export function AppHeader() {
  return (
    <header className={`${stylesAppHeader.header}`}>
      <LogoContainer />
      <HeaderMenu />
      <HeaderContact />
    </header>
  );
}
