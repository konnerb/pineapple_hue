import React from 'react';
import { contrast } from '../../utlis';

import './Button.scss';
import { paletteNameType } from '../../types';

interface Props {
  palette: any; 
  paletteType?: paletteNameType;
  percent: string; 
  toggleButtonsShadow: boolean; 
  toggleButtonsBorder: boolean; 
  toggleOpacity: boolean;
  paletteBackground: any;
}

const Button: React.FC<Props> = ( 
  
  { 
    palette, 
    paletteType,
    percent, 
    toggleButtonsShadow, 
    toggleButtonsBorder, 
    toggleOpacity,
    paletteBackground
  }) => {

  const isAAA = contrast( palette && palette.hsl, [0, 1, 1], true )

  return (
  <>  
  { palette &&
    <div className="button">
      <button className="button__main-button" 
        name={paletteType} 
        style={{
          backgroundColor: `hsl(${palette.hsl.toString()})`,
          fontSize: toggleOpacity ? "12px" : undefined,
          color: `${ (isAAA === 'AAA' && isAAA !== undefined) ? "black" : "white" }`,
          opacity: percent ? `${percent}` : `100%`,
          boxShadow: toggleButtonsShadow ? `5px 10px #888888` : `none`,
          border: toggleButtonsBorder ? `2px solid black` : `none`
        }}
      >{contrast(palette.hsl, paletteBackground.hsl, true)}
      </button>
    </div>
  }
  </>
  )
};

export default Button;