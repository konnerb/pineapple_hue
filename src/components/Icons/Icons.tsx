import React from 'react';
import './Icons.scss';

interface Props {
  iconName: string; 
  icon: string; 
  percent: number;
  toggleIconsBorder: boolean; 
  toggleOpacity: boolean; 
  toggleIconsShadow: boolean;
}

const Icons: React.FC<Props> = (

  { 
    iconName, 
    icon, 
    percent,
    toggleIconsBorder, 
    toggleOpacity, 
    toggleIconsShadow 
  }) => (

  <>  
    <div className="icon">
      <img 
        src={icon} 
        alt={`${iconName} has an opacity of ${percent ? percent * 100 + " percent" : "80 percent"}, ${toggleIconsBorder ? "a 3 pixel solid black border" : "no border"}, and ${toggleIconsShadow ? "a 5 pixel by 10 pixel light-grey shadow" : "no shadow"}`}
        className="icon__svg"
        style={{
          width: toggleOpacity ? "26px" : '',
          opacity: `${percent}`,
          boxShadow: toggleIconsShadow ? `5px 10px #888888` : `none`,
          border: toggleIconsBorder ? `3px solid black` : `none`
        }}
      />
    </div>
  </>

  );

  export default Icons;