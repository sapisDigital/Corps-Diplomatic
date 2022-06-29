import React from 'react';
import Feature from '../../components/feature/Feature';
import './events.css';
import { useTranslation } from "react-i18next";

export default function Events(){
  const [t] = useTranslation("language");
  return(
    <div className="section__padding" id="events">
        <h1 className="titles">{t("events.title")}</h1>
        <Feature title={t("events.text1")} text= "" box={"gradient__text"} />
    </div>
  );
};

