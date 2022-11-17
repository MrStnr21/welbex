import React from "react";
import stylesApp from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { Bubbles } from "../bubbles/bubbles";

export function App() {
  return (
    <div className={`${stylesApp.app}`}>
      <AppHeader />
      <main></main>
      <Bubbles />
    </div>
  );
}
