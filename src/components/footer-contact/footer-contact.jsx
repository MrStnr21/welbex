import React from "react";
import StylesFooterContact from "./footer-contact.module.css";
import logoWhatsApp from "../../images/WhatsApp.svg";
import logoTelegram from "../../images/Telegram.svg";
import logoPhone from "../../images/Phone.svg";

export function FooterContact() {
  return (
    <div className={`${StylesFooterContact.container}`}>
      <h2 className={`${StylesFooterContact.title}`}>Контакты</h2>
      <ul className={`${StylesFooterContact.list}`}>
        <li className={`${StylesFooterContact.item}`}>
          <a
            className={`${StylesFooterContact.link} ${StylesFooterContact.phone}`}
            href="##"
          >
            +7 555 555-55-55
          </a>
        </li>
        <li className={`${StylesFooterContact.itemLogo}`}>
          <ul className={`${StylesFooterContact.listLogo}`}>
            <li>
              <a href="##">
                <img
                  className={`${StylesFooterContact.logo}`}
                  src={logoTelegram}
                  alt="Telegram"
                />
              </a>
            </li>
            <li>
              <a href="##">
                <img
                  className={`${StylesFooterContact.logo}`}
                  src={logoPhone}
                  alt="Phone"
                />
              </a>
            </li>
            <li>
              <a href="##">
                <img
                  className={`${StylesFooterContact.logo}`}
                  src={logoWhatsApp}
                  alt="WhatsApp"
                />
              </a>
            </li>
          </ul>
        </li>
        <li className={`${StylesFooterContact.item}`}>
          <a
            className={`${StylesFooterContact.link}`}
            href="https://yandex.ru/maps/213/moscow/house/putevoy_proyezd_3s1/Z04YcwFpQUUHQFtvfXR2eXRrbQ==/inside/?ll=37.569800%2C55.878890&tab=inside&z=16"
            target="_ blank"
          >
            Москва, Путевой проезд 3с1, к 902
          </a>
        </li>
      </ul>
    </div>
  );
}
