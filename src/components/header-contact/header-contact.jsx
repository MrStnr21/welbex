import React from "react";
import StylesHeaderContact from "./header-contact.module.css";
import logoTelegram from "../../images/Vector.svg";

export function HeaderContact() {
  return (
    <div className={`${StylesHeaderContact.container}`}>
      <a href="">+7 555 555-55-55</a>
      <ul>
        <li>
          <a href="">
            <img className={`${StylesHeaderContact.logo}`} src="logoTelegram" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
