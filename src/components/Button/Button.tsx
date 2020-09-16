import React from 'react';
import './Button.scss';
import { contrast } from '../../utlis';

interface Props {
  palette: any, 
  paletteType?: string,
  percent: string, 
  toggleButtonsShadow: boolean, 
  toggleButtonsBorder: boolean, 
  toggleOpacity: boolean,
  paletteBackground: any
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

  const isAAA = contrast( palette.hsl, [0, 1, 1], true )

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