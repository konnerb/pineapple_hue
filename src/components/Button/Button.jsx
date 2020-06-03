import React from 'react';
import './Button.scss';
import { contrast } from '../../utlis';

export default function Button(
    
  { 
    palette, 
    percent, 
    toggleButtonsShadow, 
    toggleButtonsBorder, 
    toggleOpacity,
    paletteType,
    paletteBackground
  }) {

  const isAAA = contrast( palette.hsl, [0, 1, 1], true )

  return (
  <>  
  { palette &&
    <div className="button">
      <button className="button__main-button" 
        name={paletteType} 
        style={{
          backgroundColor: `hsl(${palette.hsl.toString()})`,
          fontSize: toggleOpacity && "12px",
          color: `${ (isAAA === 'AAA' && isAAA !== undefined) ? "black" : "white" }`,
          opacity: percent ? `${percent}` : `100%`,
          boxShadow: toggleButtonsShadow ? `5px 10px #888888` : `none`,
          border: toggleButtonsBorder ? `2px solid black` : `none`
        }}
      >{contrast(palette.hsl, paletteBackground.hsl, true )}
      </button>
    </div>
  }
  </>
  )
} 