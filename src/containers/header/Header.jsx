import React from 'react';
import './header.css';
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";


export default function Header(){
  const [t] = useTranslation("language"); 

  return(
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Corps Diplomatique International</h1>
          <h3>
            <Typewriter 
              options = {{
                  strings: [t("header.header-message")],
                  autoStart: true,
                  loop:true,
              }}  
            />
          </h3>

      <div className='gpt3__content2'>
          <h2 className="gradient__text2">{t("header.box1")} </h2>
          <h2 className="gradient__text2_2">{t("header.box2")}</h2>
      </div>
      <div className='gpt3__content3'>
        <h4 className="gradient__text2_2">{t("header.box3")} </h4>
      </div>
      

      
    </div>

    <div className="gpt3__header-image">
    </div>
  </div>
  )
            };
