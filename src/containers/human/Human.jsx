import React from 'react';
import Feature from '../../components/feature/Feature';
import Works from '../../components/works/Works';
import './human.css';
import autor from '../../assets/autor.png';
import human from '../../assets/human.png';
import human1 from '../../assets/human1.png';
import human2 from '../../assets/human2.png';
import human3 from '../../assets/human3.png';
import industry from '../../assets/industry.png';
import { useTranslation } from "react-i18next";
import { Dimensions } from 'react-native';


export default function Features(){  

  const [t] = useTranslation("language");

  const deviceWidth = Dimensions.get('window').width;
  let humandiv = "";
  let humandiv2 = "";

  if(deviceWidth > 1550){
    humandiv =  
    <div>
                <div className="gpt3__human-container">
                <div className="text-human">
                  <Feature title={t("human.title1")} text= {t("human.text1")} box={"gradient__text"} />
                </div>
                  <img className ="image_human2" src={human1} />
              </div>

              <div className="gpt3__human-container">
                <img className ="image_human2" src={human3} />
                <div className="text-human">
                <Feature title={t("human.title2")} text= {t("human.text2")} box={"gradient__text"} />
                </div>
              </div>
    </div>;
    humandiv2 =  
        <div>
            <div className="gpt3__human-container">
                <div className="text-human">
                  <Feature title={t("human.title3")} text= {t("human.text3")} box={"gradient__text"} />
                  <div className="gpt3__skills-container">
                    <p className="text-skills">{t("human.skill1")}</p>
                    <p className="text-skills">{t("human.skill2")}</p>
                    <p className="text-skills">{t("human.skill3")}</p>
                    <p className="text-skills">{t("human.skill4")}</p>
                    <p className="text-skills">{t("human.skill5")}</p>
                    <p className="text-skills">{t("human.skill6")}</p>
                    <p className="text-skills">{t("human.skill7")}</p>
                    <p className="text-skills">{t("human.skill8")}</p>
                  </div>
                </div>
                <img className ="image_human3" src={human2} />
              </div>

              <div className="gpt3__human-container">
                <img className ="image_human4" src={industry} />
                <div className="text-human">
                <Feature title={t("human.title4")} text= {t("human.text4")} box={"gradient__text"} />
                </div>
              </div>
        </div>

  }else if(deviceWidth < 750){
    humandiv =  
    <div>
                <div className="gpt3__human-container">
                <div className="text-human">
                  <Feature title={t("human.title1")} text= {t("human.text1")} box={"gradient__text"} />
                </div>
                  <img className ="image_human2" src={human1} />
              </div>

              <div className="gpt3__human-container">
                <div className="text-human">
                <Feature title={t("human.title2")} text= {t("human.text2")} box={"gradient__text"} />
                </div>
                <img className ="image_human2" src={human3} />
              </div>
    </div>;
    humandiv2 =  
        <div>
            <div className="gpt3__human-container">
                <div className="text-human">
                  <Feature title={t("human.title3")} text= {t("human.text3")} box={"gradient__text"} />
                </div>
              </div>

            <div className="gpt3__human-container">
                  <div className="gpt3__skills-container">
                        <p className="text-skills">{t("human.skill1")}</p>
                        <p className="text-skills">{t("human.skill2")}</p>
                        <p className="text-skills">{t("human.skill3")}</p>
                        <p className="text-skills">{t("human.skill4")}</p>
                        <p className="text-skills">{t("human.skill5")}</p>
                        <p className="text-skills">{t("human.skill6")}</p>
                        <p className="text-skills">{t("human.skill7")}</p>
                        <p className="text-skills">{t("human.skill8")}</p>
                  </div>
                  <img className ="image_human3" src={human2} />
            </div>  
            <div className="gpt3__human-container">
                <div className="text-human">
                <Feature title={t("human.title4")} text= {t("human.text4")} box={"gradient__text"} />
                </div>
                <img className ="image_human4" src={industry} />
              </div>
        </div>
  }else{
    humandiv = 
    <div>
                <div className="gpt3__human-container">
                <div className="text-human">
                  <Feature title={t("human.title1")} text= {t("human.text1")} box={"gradient__text"} />
                </div>
              </div>

              <div className="gpt3__human-container">
              <img className ="image_human2" src={human1} />
              <img className ="image_human2" src={human3} />
              </div>

              <div className="gpt3__human-container">
                <div className="text-human">
                <Feature title={t("human.title2")} text= {t("human.text2")} box={"gradient__text"} />
                </div>
              </div>
  </div>;
    humandiv2 =  
        <div>
            <div className="gpt3__human-container">
                <div className="text-human">
                  <Feature title={t("human.title3")} text= {t("human.text3")} box={"gradient__text"} />
                </div>
              </div>

            <div className="gpt3__human-container">
                  <div className="gpt3__skills-container">
                        <p className="text-skills">{t("human.skill1")}</p>
                        <p className="text-skills">{t("human.skill2")}</p>
                        <p className="text-skills">{t("human.skill3")}</p>
                        <p className="text-skills">{t("human.skill4")}</p>
                        <p className="text-skills">{t("human.skill5")}</p>
                        <p className="text-skills">{t("human.skill6")}</p>
                        <p className="text-skills">{t("human.skill7")}</p>
                        <p className="text-skills">{t("human.skill8")}</p>
                  </div>
                  <img className ="image_human3" src={human2} />
            </div>  
            <div className="gpt3__human-container">
                <div className="text-human">
                <Feature title={t("human.title4")} text= {t("human.text4")} box={"gradient__text"} />
                </div>
                <img className ="image_human4" src={industry} />
              </div>
        </div>
}


  return(

    <div className= "section__margin" id="human">
        <h1 className="titles">{t("human.title")}</h1>
        <div className="gpt3__human">
          <img className ="image_human" src={human} />
              
          {humandiv}
          {humandiv2}

              <div className="gpt3__human-container2">
                <div className="text-human2">
                <Feature title={t("human.title5")} text= {t("human.text5")} box={"gradient__text"} />
                </div>

                <div className="gpt3__human-container2">
                    <img className ="image_human5" src={autor} />
                  <div className="text-author">
                    <h2 className="gradient__text">{t("human.declaration")} </h2>
                  </div>
                  <div className="text-author2">
                    <p className="gradient__text"> {t("human.autor")} </p>
                  </div>
                </div>
                
              </div>
          </div>


    </div>


  );

};