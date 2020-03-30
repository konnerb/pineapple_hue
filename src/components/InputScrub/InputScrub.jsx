import React from 'react';
import './InputScrub.scss'

export default function InputScrub({ palette, handleChange, paletteType }) {
    return (
    <>
    { palette ?
        <div>
            <div>
                <label>Adjust Lightness: { Math.round(palette.hsl[2] * 100) }%</label>
                <input className="input-scrub__lightness" 
                    type="range" 
                    name="Adjust Lightness" 
                    step="any" 
                    min="0" 
                    max="1" 
                    defaultValue={palette.hsl[2]} 
                    onChange={defaultValue => handleChange(defaultValue, paletteType)}>
                </input>
            </div>
            {/*<div>
                <label>Staturation</label>
                <input className="input-scrub__saturation" 
                    type="range" 
                    name="Saturation" 
                    step="any" 
                    min="0" 
                    max="1" 
                    defaultValue={palette.hsl[1]} 
                    onChange={defaultValue => handleChange(defaultValue, paletteType)}>
                </input>
            </div>*/}
        </div>
        : null
    }
    </>
    )
} 