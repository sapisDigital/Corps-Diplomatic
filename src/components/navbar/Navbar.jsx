import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo2.png';
import './navbar.css';
import { useTranslation } from "react-i18next";


export default function Navbar(){

  const [t, i18n] = useTranslation("language"); 
  const onChange = (event) =>{
    i18n.changeLanguage(event.target.value);
  }
  const [toggleMenu, setToggleMenu] = useState(false);



  return (
    <div className="navbar">
      
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">  
          <img src={logo} /> 
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a className="gpt3__navbar-links_button" href="#home">{t("navbar.home")}</a></p>
          <p>·</p>
          <p><a className="gpt3__navbar-links_button" href="#aboutUs">{t("navbar.aboutUs")}</a></p>
          <p>·</p>
          <p><a className="gpt3__navbar-links_button" href="#how">{t("navbar.how")}</a></p>
          <p>·</p>
          <p><a className="gpt3__navbar-links_button" href="#honorary">{t("navbar.hononary")}</a></p>
          <p>·</p>
          <p><a className="gpt3__navbar-links_button" href="#human">{t("navbar.be human")}</a></p>
          <p>·</p>
          <p><a className="gpt3__navbar-links_button" href="#blog">{t("navbar.events")}</a></p>
          <p>·</p>
          <p><a className="gpt3__navbar-links_button" href="#blog">{t("navbar.news")}</a></p>
          <p>·</p>
          <p><a className="gpt3__navbar-links_button" href="#blog">{t("navbar.contacts")}</a></p>
        </div>
      </div>

      <div className="gpt3__navbar-sign">
      <select className='.gpt3__navbar-sign button'  onChange={onChange}>
        <option value={"en"}>🇬🇧&emsp;</option>
        <option value={"es"}>🇪🇸&emsp;</option>
      </select> 
      </div>
      
      
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#292929" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#292929" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a className="gpt3__navbar-links_button" href="#home">HOME</a></p>
          <p><a className="gpt3__navbar-links_button" href="#wgpt3">ABOUT US</a></p>
          <p><a className="gpt3__navbar-links_button" href="#possibility">HOW WE WORK</a></p>
          <p><a className="gpt3__navbar-links_button" href="#features">HONORARY MEMBERS</a></p>
          <p><a className="gpt3__navbar-links_button" href="#blog">BE HUMAN</a></p>
          <p><a className="gpt3__navbar-links_button" href="#blog">EVENTS</a></p>
          <p><a className="gpt3__navbar-links_button" href="#blog">NEWS</a></p>
          <p><a className="gpt3__navbar-links_button" href="#blog">CONTACT AND IMPRESSUM</a></p>
          </div>

        </div>
        )}
      </div>

    </div>
    </div>
  );
}