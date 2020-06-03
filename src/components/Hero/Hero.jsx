import React from 'react';
import './Hero.scss';
import UploadImage from '../../components/UploadImage/UploadImage';

const Hero = ({ fetchImgData, palette }) => (

  <section className="hero">
    <div className="hero__upload-image">
    {fetchImgData && <UploadImage fetchImgData={fetchImgData} />}
      <img className="hero__upload-pineapple" src="/icons/pineapple_jump-01.svg" alt="Pineapple jumping up!"></img>
    </div>
    <div className="hero__svg-container">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" 
          style={{ stroke: 'none', fill: 'rgb(250, 250, 250)' }}>
        </path>
      </svg>
    </div>
    { (palette && palette.length === 0) &&
      <h4 className="hero__upload-reminder">Please Upload An Image To See Your Colour Palette !</h4>
    }
  </section>
  
);

export default Hero;