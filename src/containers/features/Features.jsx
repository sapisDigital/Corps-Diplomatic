import React from 'react';
import Feature from '../../components/feature/Feature';
import Works from '../../components/works/Works';
import Texts from '../../components/text/Text';
import './features.css';
import work from '../../assets/work.png';
import conference from '../../assets/conference.jpg';
import { useTranslation } from "react-i18next";

export default function Features(){  

  const [t] = useTranslation("language");


  return(

    <div className= "section__margin" id="how">
        <h1 className="titles">{t("work.title")} </h1>
        <div className="gpt3__features">
          <img className ="image_features" src={work} />
          <div className="gpt3__features-container">
                <Feature title={t("work.title1")} text= {t("work.text1")} box={"1"} />
                <Feature title={t("work.title2")} text= {t("work.text2")} box={"2"} />
                <Feature title={t("work.title3")} text= {t("work.text3")} box={"1"} />
                <Feature title={t("work.title4")} text= {t("work.text4")} box={"2"} />
          </div>
        </div>

        <Works/>

        <div className="gpt3__features2">
          <div className="gpt3__features-container2">
                <Feature title={t("work.offer")} text= {t("work.offerText")} box={"gradient__text"} />
                <div className="gpt3__features-container3">
                  <p className="text-membership"> {t("work.offerText2")}</p>
                </div>
          </div>
          <img className ="image_education" src={conference} />
        </div>    

    </div>


  );

};