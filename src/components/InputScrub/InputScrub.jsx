import React from 'react';
import './InputScrub.scss'

export default function InputScrub({ palette, handleChange, roundHue }) {
    return (
    <>
    { palette ?
        <div>
            <label>Lightness</label>
            <input className="input-scrub" type="range" name={palette.hex} step="1" min="0" max="100" defaultValue={Math.round((palette.hsl[2])*100)} onChange={defaultValue => handleChange(defaultValue)}></input>
        </div>
        : null
    }
    </>
    )
} 