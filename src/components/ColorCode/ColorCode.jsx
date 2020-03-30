import React from 'react';
import './ColorCode.scss'

export default function ColorCode({ palette, paletteName, colorCode, roundSl, roundHue, hslToHex, hslToRgb, contrast }) {
    

    const h = palette[paletteName] && roundHue(palette[paletteName].hsl[0]);
    const s = palette[paletteName] && Math.round( (palette[paletteName].hsl[1]) * 100);
    const l = palette[paletteName] && Math.round( (palette[paletteName].hsl[2]) * 100);

    console.log(h,s,l)
    
    const colorContrast = contrast(
        [ roundHue(h), ( ( s * 1000) / 1000), ( ( l * 1000) / 1000) ],
        [ roundHue(h), ( ( s * 1000) / 1000), ( ( l * 1000) / 1000) ]
    )+`:1`;

    const rgb = hslToRgb(h, ( (s * 1000)  / 1000), ( ( l * 1000) / 1000), true );

    const hex = hslToHex(h, ( (s * 1000)  / 1000), ( ( l * 1000) / 1000) );
    
    console.log(rgb)
    console.log(hex)
    
    return (
    <>  
        <div className="color-code">

            { colorCode && 
                <p className="color-code__value">Hex:{hex}</p>
            }
            { colorCode && 
                <p className="color-code__value">Rgb:( {rgb} )</p>
            }
            { colorCode && 
                <p className="color-code__value">HSL:{h, s, l}</p>
            }
            { contrast && 
                <p className="color-code__value">Contrast:{colorContrast}</p>
            }

        </div>
    </>
    )
} 