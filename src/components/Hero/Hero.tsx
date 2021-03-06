import React from 'react';

import './Hero.scss';
import UploadImage from '../UploadImage/UploadImage';
import Lottie from 'react-lottie';
import lottieLoader from '../../assets/loader/loader_green.json';

interface Props {
  fetchImgData?: any;
  palette?: any;
  ogPalette?: any;
  renderUpload?: boolean;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: lottieLoader,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Hero: React.FC<Props> = ({ fetchImgData, palette, ogPalette, renderUpload }) => (
  
  <section className="hero">
    {palette && <span className="hero__south-arrow">↓</span>}
    <div className="hero__upload-image">
      <div className="hero__input-container">
        {fetchImgData && 
          <>
            <UploadImage fetchImgData={fetchImgData} />
              <div className="hero__lotti">
                {(ogPalette && !palette) && 
                  <Lottie               
                    options={ defaultOptions }
                    height={100}
                    width={100}
                  />
                }
              </div>
          </>
        }
      </div>
      { fetchImgData 
        ? <img className="hero__upload-pineapple" src="/icons/pineapple_jump.svg" alt="Pineapple jumping up!" onLoad={() => console.log('Loaded jumping SVG')}></img>
        : <img className="hero__upload-pineapple" src="/icons/pineapple_hi.svg" alt="Pineapple saying hi!" onLoad={() => console.log('Loaded hi SVG')}></img>
      }
    </div>
    <div className="hero__svg-container">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" 
          style={{ stroke: 'none', fill: 'rgb(250, 250, 250)' }}>
        </path>
      </svg>
    </div>
    {}
    { ( ( !ogPalette && palette === undefined ) && !renderUpload ) &&
      <h4 className="hero__upload-reminder">Please Upload An Image To See Your Colour Palette !</h4>
    }
    { (palette === undefined && ogPalette) &&
      <h4 className="hero__upload-reminder">Loading...</h4>
    }
  </section>  

);

export default Hero;