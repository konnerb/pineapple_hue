import React, { useState } from 'react';
import './Icons.scss';

interface Props {
  iconName: string; 
  icon: string; 
  opacity: number | undefined;
  toggleIconsBorder: boolean; 
  toggleOpacity: boolean; 
  toggleIconsShadow: boolean;
  onLoadColor: string;
}

const Icons: React.FC<Props> = (

  { 
    iconName, 
    icon, 
    opacity,
    toggleIconsBorder, 
    toggleOpacity, 
    toggleIconsShadow,
    onLoadColor
  }) => {

  const [iconLoaded, setIconLoaded] = useState(false)  

  return (
    <>  
      <div className="icon">
        { !iconLoaded && 
          <div 
            className="icon__svg-loader" 
            style={{
              backgroundColor: onLoadColor,
            }}
          ></div>
        }
        <img 
          src={icon}
          onLoad={() => setIconLoaded(true)} 
          alt={`${iconName} has an opacity of ${opacity ? opacity * 100 + " percent" : "80 percent"}, ${toggleIconsBorder ? "a 3 pixel solid black border" : "no border"}, and ${toggleIconsShadow ? "a 5 pixel by 10 pixel light-grey shadow" : "no shadow"}`}
          className="icon__svg"
          style={{
            width: toggleOpacity ? "26px" : '',
            opacity: `${opacity}`,
            boxShadow: toggleIconsShadow ? `5px 10px #888888` : `none`,
            border: toggleIconsBorder ? `3px solid black` : `none`
          }}
        />
      </div>
    </>
    );
}

  export default Icons;