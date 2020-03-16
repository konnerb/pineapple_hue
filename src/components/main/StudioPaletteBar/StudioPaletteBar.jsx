import React from 'react';
import './StudioPaletteBar.scss'
import Palette from '../../Palette/Palette'

export default function StudioPaletteBar({ palette}) {
    return (
        <div className="bar">
            <p>Studio Palette Bar</p>
            <Palette palette={palette} />
        </div>
    )
} 