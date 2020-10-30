import React, { useState, useEffect } from 'react';
import { hslToHex, hslToRgb, roundHue, contrast } from '../../utlis';

import './ColorCode.scss';
import { isAAAType, codeTyped, paletteNameType } from '../../types';

interface Props {
  palette: any;
  paletteName: paletteNameType | string;
  colorCode: boolean;
  codeType: codeTyped;
  isToggled?: boolean;
  isAAA: isAAAType;
}

const ColorCode: React.FC<Props> = (
  
  { 
    palette, 
    paletteName, 
    colorCode, 
    codeType, 
    isToggled, 
    isAAA
  }) => {

  const [isCopied, setIsCopied] = useState({
    hex: false,
    rgb: false,
    hsl: false,
  })
  
  useEffect(() => { 
    const timer = setTimeout(() => {
      setIsCopied({
        hex: false,
        rgb: false,
        hsl: false,
      })
    }, 1000);
    return () => clearInterval(timer); 
  }, [isCopied]);
  
  const copyToClipboard = (key: string, value: any) => {
    
    let toggleIsCopied = isCopied[key]
    setIsCopied({...isCopied, [key]: !toggleIsCopied})
    
    const el = document.createElement('textarea');
    el.value = value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const h = palette[paletteName] && palette[paletteName].hsl[0];
  const s = palette[paletteName] && parseFloat(palette[paletteName].hsl[1]);
  const l = palette[paletteName] && parseFloat(palette[paletteName].hsl[2]);

  const h2 = palette[paletteName] && roundHue(palette[paletteName]._hsl[0]);
  const s2 = palette[paletteName] && Math.round( (palette[paletteName]._hsl[1]) * 100);
  const l2 = palette[paletteName] && Math.round( (palette[paletteName]._hsl[2]) * 100);
  
  const colorContrast = contrast([ h, s, l ], [ h2, s2, l2 ]);

  const rgb = hslToRgb(h, ( (s * 1000)  / 1000 ), ( (l * 1000) / 1000), true );

  const hex = 
    ( (isToggled === true && codeType === 'hex') || colorCode === true ) 
    ? hslToHex(h, ( (s * 1000)  / 1000 ), ( (l * 1000) / 1000) )
    : palette[paletteName]._hex

    
    const useAAAColour = 
    (isAAA === 'AAA' 
    && isAAA !== undefined 
    ? "color-code" 
    : "color-code white")
    
    const hslToString = `${h + ', ' + s + '%, ' + l + '%'}`

    const renderHex = isCopied.hex ? 'Copied Hex !' : `Hex: ${hex}`;
    const renderRgb = isCopied.rgb ? 'Copied Rgb !' : `Rgb:(${rgb})`
    const renderHsl = isCopied.hsl ? 'Copied Hsl !' : `Hsl:(${hslToString})`;

return (
  <>  
  <div className={useAAAColour}>

    { (colorCode === true || codeType === 'hex') && 
      <p 
        className="color-code__value" 
        onClick={() => copyToClipboard('hex', hex)}
      >{renderHex}
      </p>
    }
    { (colorCode === true || codeType === 'rgb') && 
      <p 
        className="color-code__value display-none" 
        onClick={() => copyToClipboard('rgb', rgb)}
      >{renderRgb}
      </p>
    }
    { (colorCode === true || codeType === 'hsl') && 
      <p 
        className="color-code__value display-none" 
        onClick={() => copyToClipboard('hsl', hslToString)}
      >{renderHsl}
      </p>
    }
    { codeType === 'contrast' && 
      <p 
        className="color-code__value"
      >Contrast: {colorContrast}:1
      </p>
    }

  </div>
  </>
  )
}; 

export default ColorCode;