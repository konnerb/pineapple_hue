import React from 'react';
import './Studio.scss'
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar'
import StudioWebsite from '../StudioWebsite/StudioWebsite'

export default function Studio({ palette, image }) {
    return (
        <div className="studio">
            {<img src={image} style={{maxWidth: '500px', maxHeight: '500px'}}></img>}
            <StudioWebsite />
            <StudioPaletteBar palette={palette} image={image}  />
        </div>
    )
} 