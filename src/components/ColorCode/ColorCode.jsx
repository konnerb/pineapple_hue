import React from 'react';
import './ColorCode.scss';
import { hslToHex, hslToRgb, roundHue, contrast } from '../../utlis';

export default function ColorCode(
    
  { 
    palette, 
    paletteName, 
    colorCode, 
    codeType, 
    isToggled, 
    isAAA
  }) {
    
  const h = palette[paletteName] && roundHue(palette[paletteName].hsl[0]);
  const s = palette[paletteName] && Math.round( (palette[paletteName].hsl[1]) * 100);
  const l = palette[paletteName] && Math.round( (palette[paletteName].hsl[2]) * 100);

  const h2 = palette[paletteName] && roundHue(palette[paletteName]._hsl[0]);
  const s2 = palette[paletteName] && Math.round( (palette[paletteName]._hsl[1]) * 100);
  const l2 = palette[paletteName] && Math.round( (palette[paletteName]._hsl[2]) * 100);
  
  const colorContrast = contrast([ h, s, l ], [ h2, s2, l2 ]);

  const rgb = hslToRgb(h, ( (s * 1000)  / 1000 ), ( (l * 1000) / 1000), true );

  const hex = 
        ( (isToggled === true && codeType === 'hex') || colorCode === true ) 
        ? hslToHex(h, ( (s * 1000)  / 1000 ), ( (l * 1000) / 1000) )
        : palette[paletteName]._hex

return (
  <>  
  <div className={isAAA && isAAA !== undefined ? "color-code white" : "color-code"}>

    { (colorCode === true || codeType === 'hex') && 
      <p className="color-code__value">Hex: {hex}</p>
    }
    { (colorCode === true || codeType === 'rgb') && 
      <p className="color-code__value display-none">Rgb:({rgb})</p>
    }
    { (colorCode === true || codeType === 'hsl') && 
      <p className="color-code__value display-none">Hsl:({h}, {s}%, {l}%)</p>
    }
    { codeType === 'contrast' && 
      <p className="color-code__value">Contrast: {colorContrast}:1</p>
    }

  </div>
  </>
  )
} 