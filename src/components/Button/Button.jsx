import React from 'react';
import './Button.scss'

export default function Button({ palette, percent, handleChange, paletteType, buttonText, roundHue, roundSl }) {
    return (
    <>  { palette ?
        <div className="button">
                <button className="button__main-button" 
                    name={paletteType} 
                    style={{
                        backgroundColor: 'hsl('+roundHue(palette.hsl[0])+','+roundSl(palette.hsl[1])+','+roundSl(palette.hsl[2])+')',
                        color: `${palette.titleTextColor}`,
                        opacity: `${percent}%`
                    }}
                    //onClick={defaultValue => handleChange(defaultValue, paletteType)}
                    >{buttonText}
                </button>
        </div>
        : <p>Not here</p>
        }
    </>
    )
} 