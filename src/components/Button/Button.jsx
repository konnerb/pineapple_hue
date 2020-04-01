import React from 'react';
import './Button.scss'

export default function Button(
    
    { 
        palette, 
        percent, 
        toggleButtonsShadow, 
        toggleButtonsBorder, 
        handleChange, 
        paletteType, 
        buttonText, 
        roundHue, 
        roundSl 
    }) {

    return (
    <>  { palette &&
        <div className="button">
                <button className="button__main-button" 
                    name={paletteType} 
                    style={{
                        backgroundColor: 'hsl('+roundHue(palette.hsl[0])+','+roundSl(palette.hsl[1])+','+roundSl(palette.hsl[2])+')',
                        color: `${palette.titleTextColor}`,
                        opacity: percent ? `${percent}` : `100%`,
                        boxShadow: toggleButtonsShadow ? `5px 10px #888888` : `none`,
                        border: toggleButtonsBorder ? `2px solid black` : `none`
                    }}
                    //onClick={defaultValue => handleChange(defaultValue, paletteType)}
                    >{buttonText}
                </button>
        </div>
        }
    </>
    )
} 