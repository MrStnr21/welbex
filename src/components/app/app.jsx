import React from "react";
import stylesApp from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { Bubbles } from "../bubbles/bubbles";
import { AppFooter } from "../app-footer/app-footer";
import { Slogan } from "../slogan/slogan";
import { Consultation } from "../consultation/consultation";

export function App() {
  return (
    <div className={`${stylesApp.app}`}>
      <AppHeader />
      <main className={`${stylesApp.main}`}>
        <Slogan />
        <Consultation />
      </main>
      <AppFooter />
      <Bubbles />
    </div>
  );
}
