import React from 'react';
import './brand.css';
import location from '../../assets/location.png';


const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div className="block1">
    ASSOCIATIÒN EUBULIE
    <img className='image' src={location} /> 
    </div>
    <div className="gpt3__brand_div">
    MADRID
    </div>
    <div className="gpt3__brand_point">
      •
    </div>
    <div className="gpt3__brand_div">
    VIENNA
    </div>
    <div className="gpt3__brand_point">
      •
    </div>
    <div className="gpt3__brand_div">
    MOSCOW
    </div>
    <div className="gpt3__brand_point">
      •
    </div>
    <div className="gpt3__brand_div">
    PARIS
    </div>
    <div className="gpt3__brand_point">
      •
    </div>
    <div className="gpt3__brand_div">
    DUBAI
    </div>
  </div>
);

export default Brand;
