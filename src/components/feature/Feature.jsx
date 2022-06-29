import React from 'react';
import './feature.css';

export default function Feature({ title, text, box}){

  if(box==1){
    return(
      <div className="gpt3__features-container__feature2">
        <div className="gpt3__features-container__feature-title2">
            <h1 className="gradient__title">{title}</h1>
            <ul className="gpt3__features-container__feature-ul"/>
            <p className="gradient__text">{text}</p>
        </div>
      </div>
    );
  }else if(box==2){
    return(
    
      <div className="gpt3__features-container__feature3">
        <div className="gpt3__features-container__feature-title2">
            <h1 className="gradient__title">{title}</h1>
            <ul className="gpt3__features-container__feature-ul"/>
            <p className="gradient__text">{text}</p>
        </div>
      </div>
    );
  }else if(box==3){
    return(
    
      <div className="gpt3__features-container__feature4">
        <div className="gpt3__features-container__feature-title">
          <div className="gpt3__container__feature4">
            <h1>{title}</h1>
          </div>   
            <p>{text}</p>
        </div>
      </div>
    );
  }else{
    return(
    
      <div className="gpt3__features-container__feature">
        <div className="gpt3__features-container__feature-title">
            <h1>{title}</h1>
            <ul className="gpt3__features-container__feature-ul"/>
            <p>{text}</p>
        </div>
      </div>
    );
  }

};