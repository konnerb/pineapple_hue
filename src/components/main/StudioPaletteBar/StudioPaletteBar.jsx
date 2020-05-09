import React from 'react';
import './StudioPaletteBar.scss'
import Palette from '../../Palette/Palette'

export default function StudioPaletteBar({ palette }) {
  return (
  <>
    { palette.Vibrant &&  
      <div className="bar">
        <div className="bar__container">
          <div className="bar__palette-container">
            <Palette 
            palette={palette.Vibrant} 
            borderRadiusType='topLeft'
            />
          </div>

          <div className="bar__palette-container">
            <Palette palette={palette.LightVibrant} />
          </div>

          <div className="bar__palette-container">
            <Palette palette={palette.DarkVibrant} />
          </div>

          <div className="bar__palette-container">
            <Palette palette={palette.Muted} />
          </div>

          <div className="bar__palette-container">
            <Palette palette={palette.LightMuted} />
          </div>

          <div className="bar__palette-container">    
            <Palette 
            palette={palette.DarkMuted} 
            borderRadiusType='bottomLeft'
            />
          </div>
        </div>
      </div>
    }
  </>
  )
} 