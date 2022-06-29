import React from 'react';
import './footer.css';
import { useTranslation } from "react-i18next";

export default function Footer(){
  const [t] = useTranslation("language");
  return(
    <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-copyright">
      <p>{t("footer.text1")}</p>
    </div>
  </div>
  )

}

