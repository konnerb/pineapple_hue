import React from 'react';
import './InputScrub.scss'

export default function InputScrub({ palette }) {
    return (
    <>
    { palette ?
        <div>
        <span>Lightness</span>
        <input className="input-scrub" type="range" step="any" min="0" max="255" value={palette.b}></input>
        </div>
        : null
    }
    </>
    )
} 