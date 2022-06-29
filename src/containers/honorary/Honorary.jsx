import React from 'react';
import Feature from '../../components/feature/Feature';
import Works from '../../components/works/Works';
import './honorary.css';
import honorary from '../../assets/honorary.jpg';
import member1 from '../../assets/member1.png';
import member2 from '../../assets/member2.png';
import member3 from '../../assets/member3.png';
import { useTranslation } from "react-i18next";

export default function Features(){  

  const [t] = useTranslation("language");


  return(

    <div className= "section__margin" id="honorary">
        <h1 className="titles">{t("honorary.title1")}</h1>

        <div className="gpt3__honorary">
          <img className ="image_honorary" src={honorary} />

            <div className="container1">
              
              <div className="container">
              <img className ="image_honorary2" src={member1} />
                  <div className="text-honorary">
                    <Feature title={t("honorary.member1")} text= {t("honorary.text1")} box={"3"} />
                  </div>
                  <div className="text-rol">
                    <h2 className="title__box2">{t("honorary.honorary1")}</h2>
                  </div>
                </div>

                <div className="container">
                <img className ="image_honorary3" src={member2} />
                  <div className="text-honorary">
                  <Feature title={t("honorary.member2")} text= {t("honorary.text2")} box={"3"} />
                  </div>
                  <div className="text-rol">
                    <h2 className="title__box2">{t("honorary.honorary2")}</h2>
                  </div>
                </div>

                <div className="container">
                <img className ="image_honorary3" src={member3} />
                  <div className="text-honorary">
                  <Feature title={t("honorary.member3")} text= {t("honorary.text3")} box={"3"} />
                  </div>
                  <div className="text-rol">
                    <h2 className="title__box2">{t("honorary.honorary3")}</h2>
                  </div>
                </div>
            </div>
              
          </div>


    </div>


  );

};