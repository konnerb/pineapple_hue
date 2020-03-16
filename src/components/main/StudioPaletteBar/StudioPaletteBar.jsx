import React from 'react';
import './StudioPaletteBar.scss'
import Palette from '../../Palette/Palette'

export default function StudioPaletteBar({ palette, image }) {
    return (
        <div className="bar">
            <p>Studio Bar</p>
            {<img src={image} className="bar__uploadImg"></img>}
            <Palette palette={palette} />
        </div>
    )
} 