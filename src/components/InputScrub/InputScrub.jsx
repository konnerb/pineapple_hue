import React from 'react';
import './InputScrub.scss'

export default function InputScrub({ palette, handleChange }) {
    return (
    <>
    { palette ?
        <div>
        <label>Lightness</label>
        <input className="input-scrub" type="range" name={palette.hex} step="any" min="0" max="1" defaultValue={palette.hsl[2]} onChange={defaultValue => handleChange(defaultValue)}></input>
        </div>
        : null
    }
    </>
    )
} 