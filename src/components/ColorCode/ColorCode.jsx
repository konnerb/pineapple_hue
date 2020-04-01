import React from 'react';
import './ColorCode.scss'

export default function ColorCode(
    
    { 
        palette, 
        paletteName, 
        colorCode, 
        codeType, 
        roundHue, 
        hslToHex, 
        hslToRgb, 
        contrast 
    }) {

    const h = palette[paletteName] && roundHue(palette[paletteName].hsl[0]);
    const s = palette[paletteName] && Math.round( (palette[paletteName].hsl[1]) * 100);
    const l = palette[paletteName] && Math.round( (palette[paletteName].hsl[2]) * 100);
    
    const colorContrast = contrast(
        [ h, ( (s * 1000) / 1000 ), ( (l * 1000) / 1000 ) ],
        [ h, ( (s * 1000) / 1000 ), ( (l * 1000) / 1000 ) ]
    )+`:1`;

    const rgb = hslToRgb(h, ( (s * 1000)  / 1000 ), ( (l * 1000) / 1000), true );

    const hex = hslToHex(h, ( (s * 1000)  / 1000 ), ( (l * 1000) / 1000) );
    
    return (
    <>  
        <div className="color-code">

            { (colorCode || codeType === 'hex') && 
                <p className="color-code__value">Hex:{hex}</p>
            }
            { (colorCode || codeType === 'rgb') && 
                <p className="color-code__value">Rgb:( {rgb} )</p>
            }
            { (colorCode || codeType === 'hsl') && 
                <p className="color-code__value">Hsl:( {h}, {s}%, {l}% )</p>
            }
            { codeType === 'contrast' && 
                <p className="color-code__value">Contrast:{colorContrast}</p>
            }

        </div>
    </>
    )
} 