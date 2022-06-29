import React from 'react';
import Feature from '../../components/feature/Feature';
import Text from '../../components/text/Text';
import vienna from '../../assets/Vienna.jpg';
import handshake from '../../assets/handshake.png';
import tick from '../../assets/tick.png';
import logo from '../../assets/logo.png';
import './aboutUs.css';
import Videos from '../../components/videos/Videos';
import { useTranslation } from "react-i18next";


export default function AboutUs(){

  const [t] = useTranslation("language");
  
  return(
    <div id="aboutUs">
      <h1 className="titles section__margin">{t("about.title")}</h1 >
       
      <div className="gpt3__whatgpt3 section__margin">
          <img className = "image_about" src={vienna} />
          <div className="gpt3__whatgpt3-container">
            <Feature title={t("about.title1")} text= {t("about.text1")} box={""} />
            <Feature title={t("about.title2")} text= {t("about.text2")} box={""} />
            <Feature title={t("about.title3")} text= {t("about.text3")} box={""} />
          </div>
      </div>


      <div className="section__margin">
      <Videos />
      </div>
      

     <div className="gpt3__whatgpt2 section__margin">
          <div className="gpt3__whatgpt3-container2">
            <h2 className="gradient__text"> {t("about.diplomacy") }</h2>
            <img className = "image_about2" src={handshake} /> 
          </div>
          <div className="gpt3__whatgpt3-container22">
            <Text title={t("about.strong")} text= {t("about.strongText")} box={"1"} />
            <Text title={t("about.soft")} text= {t("about.softText")} box={"1"} />
            <img className = "image_about22" src={tick} /> 
          </div>
     </div>

     <div className="gpt3__whatgpt3-container4 section__margin">
            <p className="text1"> {t("about.text4") }</p>
          <div className="gpt3__whatgpt3-container5"> 
            <h3> {t("about.text5")} </h3>
            <img className = "image_about3" src={logo}/> 
          </div>

     </div>




    </div>



    
  
);
};

