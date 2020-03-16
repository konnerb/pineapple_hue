import React from 'react';
import './Studio.scss'
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar'
import StudioWebsite from '../StudioWebsite/StudioWebsite'

export default function Studio({ palette, image }) {
    return (
        <div className="studio">
            <StudioPaletteBar palette={palette} image={image}  />
            <StudioWebsite palette={palette} />
        </div>
    )
} 