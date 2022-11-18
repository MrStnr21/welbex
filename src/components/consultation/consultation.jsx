import React from "react";
import StylesConsultation from "./consultation.module.css";

export function Consultation() {
  return (
    <div className={`${StylesConsultation.container}`}>
      <h3 className={`${StylesConsultation.title}`}>
        Вместе с&nbsp;
        <span className={`${StylesConsultation.titleSpan}`}>
          бесплатной консультацией&nbsp;
        </span>
        мы дарим:
      </h3>
      <div className={`${StylesConsultation.gifts}`}>
        <div className={`${StylesConsultation.giftsItem}`}>
          <h4 className={`${StylesConsultation.giftsTitle}`}>Виджеты</h4>
          <p className={`${StylesConsultation.giftsText}`}>
            30 готовых решений
          </p>
        </div>
        <div className={`${StylesConsultation.giftsItem}`}>
          <h4 className={`${StylesConsultation.giftsTitle}`}>Dashboard</h4>
          <p className={`${StylesConsultation.giftsText}`}>
            с показателями вашего бизнеса
          </p>
        </div>
        <div className={`${StylesConsultation.giftsItem}`}>
          <h4 className={`${StylesConsultation.giftsTitle}`}>Skype Аудит</h4>
          <p className={`${StylesConsultation.giftsText}`}>
            отдела продаж и CRM системы
          </p>
        </div>
        <div className={`${StylesConsultation.giftsItem}`}>
          <h4 className={`${StylesConsultation.giftsTitle}`}>35 дней</h4>
          <p className={`${StylesConsultation.giftsText}`}>использования CRM</p>
        </div>
      </div>
      <button type="button" className={`${StylesConsultation.button}`}>
        Получить консультацию
      </button>
    </div>
  );
}
