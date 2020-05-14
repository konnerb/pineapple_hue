import React from 'react';
import './Button.scss';
import { roundHue, roundSl, contrast } from '../../utlis';

export default function Button(
    
    { 
        palette, 
        percent, 
        toggleButtonsShadow, 
        toggleButtonsBorder, 
        toggleOpacity,
        paletteType, 
        buttonText
    }) {

    const isAAA = contrast(
      [roundHue(palette.hsl[0]), 
      Math.round(palette.hsl[1] * 100), 
      Math.round(palette.hsl[2] * 100)
      ],
      [0, 1, 1],
      true
    )

    return (
    <>  { palette &&
        <div className="button">
                <button className="button__main-button" 
                    name={paletteType} 
                    style={{
                        backgroundColor: 'hsl('+roundHue(palette.hsl[0])+','+roundSl(palette.hsl[1])+','+roundSl(palette.hsl[2])+')',
                        fontSize: toggleOpacity && "12px",
                        color: `${ (isAAA && isAAA !== undefined) ? "white" : "black" }`,
                        opacity: percent ? `${percent}` : `100%`,
                        boxShadow: toggleButtonsShadow ? `5px 10px #888888` : `none`,
                        border: toggleButtonsBorder ? `2px solid black` : `none`
                    }}
                    >{buttonText}
                </button>
        </div>
        }
    </>
    )
} 