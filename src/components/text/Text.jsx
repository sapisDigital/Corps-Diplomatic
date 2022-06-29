import React from 'react';
import './text.css';

export default function Text({ title, text, box}){

  if(box==1){
    return(
        <div className="gpt3__features-container__text-title2">
          <h1>{title}</h1>
          <p className={box}>{text}</p>
        </div>
    );
  }else{
    return(
      <div className="gpt3__features-container__text">
        <div className="gpt3__features-container__text-title">
          <h1 className="gradient__title">{title}</h1>
          <p className={box}>{text}</p>
        </div>
      </div>
  );
  }

};
