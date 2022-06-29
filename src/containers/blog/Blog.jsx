import React from 'react';
import Feature from '../../components/feature/Feature';
import './blog.css';
import { useTranslation } from "react-i18next";

export default function Blog(){
  const [t] = useTranslation("language");
  return(
    <div className="section__padding" id="blog">
        <h1 className="titles">{t("blog.title")}</h1>
        <Feature title={t("blog.text1")} text= "" box={"gradient__text"} />
    </div>
  );
};

