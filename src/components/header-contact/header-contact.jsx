import React from "react";
import StylesHeaderContact from "./header-contact.module.css";
import logoWhatsApp from "../../images/WhatsApp.svg";
import logoTelegram from "../../images/Telegram.svg";
import logoPhone from "../../images/Phone.svg";

export function HeaderContact() {
  return (
    <div className={`${StylesHeaderContact.container}`}>
      <a className={`${StylesHeaderContact.phoneNumber}`} href="##">+7 555 555-55-55</a>
      <ul className={`${StylesHeaderContact.list}`}>
        <li>
          <a href="##">
            <img
              className={`${StylesHeaderContact.logo}`}
              src={logoTelegram}
              alt="Telegram"
            />
          </a>
        </li>
        <li>
          <a href="##">
            <img
              className={`${StylesHeaderContact.logo}`}
              src={logoPhone}
              alt="Phone"
            />
          </a>
        </li>
        <li>
          <a href="##">
            <img
              className={`${StylesHeaderContact.logo}`}
              src={logoWhatsApp}
              alt="WhatsApp"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
