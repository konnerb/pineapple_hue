import React, { useState } from 'react';
import './Image.scss';

interface Props {
  imageName: string; 
  opacity: number | undefined; 
  image: any; 
  toggleImagesBorder: boolean; 
  toggleImagesShadow: boolean;
  onLoadColor?: string;
}

const Image: React.FC<Props> = (
  
  { 
    imageName, 
    opacity,
    image, 
    toggleImagesBorder, 
    toggleImagesShadow,
    onLoadColor
  }) => {

    const [imgLoaded, setImgLoaded] = useState(false)  

    return (
      <>  
        <div className="image">
          { !imgLoaded && 
            <div 
              className="image__the-image" 
              style={{
                backgroundColor: onLoadColor,
              }}
            ></div>
          }
          <img 
            src={image} 
            onLoad={() => setImgLoaded(true)}
            alt={`${imageName} has an opacity of ${opacity ? opacity * 100 + " percent" : "80 percent"}, ${toggleImagesBorder ? "a 3 pixel solid black border" : "no border"}, and ${toggleImagesShadow ? "a 5 pixel by 10 pixel light-grey shadow" : "no shadow"}`}
            className="image__the-image" 
            style ={{
              opacity: `${opacity}`,
              boxShadow: toggleImagesShadow ? `5px 10px #888888` : `none`,
              border: toggleImagesBorder ? `3px solid black` : `none`
            }}
            />
        </div>
      </>
  )
};

export default Image;